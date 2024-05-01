import React, { useState } from "react";
import lightLogo from "/src/assets/light-rounded-logo.svg";
import darkLogo from "/src/assets/dark-rounded-logo.svg";
import { BsGithub } from "react-icons/bs";
import DarkMode from "./DarkMode";

function Navbar() {
  const [theme, settheme] = useState(
    localStorage.getItem("darkmode") === "true"
  );

  return (
    <div className="w-full select-none bg-slate-100 dark:bg-slate-950 px-20 py-4 flex justify-between items-center">
      <picture>
        <img className="w-10" src={theme ? darkLogo : lightLogo} alt="" />
      </picture>
      <div className="flex gap-6">
        <a
          className="font-cascadiaBold text-2xl flex gap-3 items-center"
          href="https://github.com/naimak659"
          target="_blank"
        >
          <BsGithub></BsGithub>
          <p className="text-base">naimak659</p>
        </a>
        <DarkMode onThemeChange={(dark) => settheme(dark)} />
      </div>
    </div>
  );
}

export default Navbar;
