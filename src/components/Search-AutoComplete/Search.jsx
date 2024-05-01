import React, { useEffect, useMemo, useRef, useState } from "react";
import Suggestions from "./Suggestions";
import debounce from "lodash.debounce";

function Search() {
  const [users, setUsers] = useState([]);
  const [userBio, setUserBio] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filterUsers, setFilterUsers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const SuggestionsRef = useRef(null);

  const handleClick = (e) => {
    // setShowDropDown(false);
    setSearchParam(e.target.innerText);
    // setFilterUsers([]);
  };
  const handleSearch = debounce((query) => {
    if (query.length >= 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterUsers(filterData);
      setShowDropDown(true);
    } else setShowDropDown(false);

  }, 200);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && activeIndex < filterUsers.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (e.key === "ArrowUp" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (activeIndex == filterUsers.length - 1) {
      setActiveIndex(0);
    } else if (activeIndex == 0) {
      setActiveIndex(filterUsers.length - 1);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      setSearchParam(filterUsers[activeIndex]);
      setShowDropDown(false);
      setActiveIndex(-1);
    }
  };

  const filterUser = useMemo(() => {
    return users.filter((user) =>
      user.toLowerCase().includes(searchParam.toLowerCase())
    );
  }, [users, searchParam]);

  useEffect(() => {
    if (SuggestionsRef.current && activeIndex >= 0)
      SuggestionsRef.current.children[activeIndex].focus();
  }, [activeIndex]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.users.map((e) => e.firstName));
        setUserBio(res.users);
      });
  }, []);

  return (
    <>
      <div className="bg-gray-950 py-32 px-12 border-t-2 border-zinc-900">
        <input
          className="text-black px-2 py-3 rounded-lg focus:outline-zinc-700 w-full mb-4 text-lg font-semibold"
          value={searchParam}
          onChange={(e) => {
            let quary = e.target.value.toLowerCase();
            setSearchParam(quary);
            handleSearch(quary);
          }}
          onKeyDown={handleKeyDown}
          type="text"
        />

        {showDropDown && (
          <Suggestions
            click={handleClick}
            data={filterUser}
            ref={SuggestionsRef}
            activeIndex={activeIndex}
          />
        )}
      </div>
    </>
  );
}

export default Search;
