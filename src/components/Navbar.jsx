import React from "react";
import logo from "/src/assets/rounded-logo.png";

function Navbar() {
  return (
    <div className="w-full select-none bg-slate-950 px-4 py-5 flex justify-between items-center">
      <picture>
        <img className="w-9 " src={logo} alt="" />
      </picture>
      <a
        className="font-cascadiaBold "
        href="https://github.com/naimak659"
        target="_blank"
      >
        Github
      </a>
    </div>
  );
}

export default Navbar;
