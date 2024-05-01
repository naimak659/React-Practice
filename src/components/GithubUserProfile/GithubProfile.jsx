import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

function GithubProfile() {
  const [userName, setUserName] = useState("naimak659");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((res) => setUserData(res))
      .catch(e=> console.log(`fecth error ${e}`));
  }, [userName]);

  //
  return (
    <div className="bg-gray-950 py-32 grid place-items-center">
      <div className="">
        <input
          placeholder="Write the name"
          className="bg-slate-800 px-2 py-3 rounded"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      <UserProfile user={userData} />
    </div>
  );
}

export default GithubProfile;
