import React from "react";

function AreaSearch({ search, setSearch, handleSearch }) {
  return (
    <>
      <div className="flex justify-center py-9 shadow-lg dark:shadow-2xl">
        <input
          className="px-3 py-4 rounded-l-md   bg-white dark:bg-zinc-900 dark:text-zinc-100 font-semibold focus:outline-none dark:placeholder:text-zinc-400 placeholder:font-medium"
          type="text"
          placeholder="Enter City Name"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          className="rounded-r-md text-center bg-white dark:bg-zinc-900 px-2 border-l-2 border-zinc-800 hover:bg-zinc-800 font-semibold"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default AreaSearch;
