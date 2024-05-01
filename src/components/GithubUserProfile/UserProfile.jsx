import React from "react";

function UserProfile({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createAcc = new Date(created_at);
  return (
    <div className="bg-gray-950 py-32 flex flex-col items-center justify-center">
      <picture>
        <img className="" src={avatar_url} alt={avatar_url} />
      </picture>
      <div className="flex items-center justify-center flex-col">
        <a target="_blank" href={`https://github.com/${login}`}>
          {name || login}
        </a>
        <p>{`${name || login} Created account ${createAcc.getDate()}/${
          createAcc.getMonth() + 1
        }/${createAcc.getFullYear()} `}</p>
      </div>
      <div className="profile-info">
        <div className="flex gap-4">
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div className="flex gap-4">
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div className="flex gap-4">
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
