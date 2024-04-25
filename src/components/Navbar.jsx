import React from "react";
import logo from "/src/assets/rounded-logo.png";
import { BsGithub } from "react-icons/bs";

function Navbar() {
  return (
    <div className="w-full select-none bg-slate-950 px-20 py-5 flex justify-between items-center">
      <picture>
        <img className="w-14 " src={logo} alt="" />
      </picture>
      <a
        className="font-cascadiaBold text-3xl text-white flex gap-3 items-center"
        href="https://github.com/naimak659"
        target="_blank"
      >
        <BsGithub></BsGithub>
        <p className="text-base">naimak659</p>
      </a>
    </div>
  );
}

export default Navbar;
