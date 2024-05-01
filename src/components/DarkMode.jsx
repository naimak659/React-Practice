import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";

function DarkMode({ onThemeChange }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDark(isDarkMode);
    document.body.classList.toggle("dark", isDarkMode);
  }, []);

  const darkModeHandler = () => {
    const newDarkValue = !dark;
    setDark(newDarkValue);
    localStorage.setItem("darkMode", newDarkValue);
    document.body.classList.toggle("dark", newDarkValue);
    onThemeChange(newDarkValue);
  };

  return (
    <>
      <button onClick={() => darkModeHandler()}>
        {dark ? <HiOutlineMoon /> : <FiSun />}
      </button>
    </>
  );
}

export default DarkMode;
