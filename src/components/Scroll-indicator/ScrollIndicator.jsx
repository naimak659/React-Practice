import React, { useEffect, useState } from "react";

function ScrollIndicator() {
  const [scrolled, setScrolled] = useState(0);

  function scrollPercentage() {
    let ClientScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrolled((ClientScrolled / height) * 100);
  }
  console.log(scrolled);
  useEffect(() => {
    window.addEventListener("scroll", scrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <div className="h-[9000px] relative">
      <div className="bg-black px-4 py-5 fixed top-16 left-0 w-full">
        <div
          className="bg-pink-600 px-1 py-3"
          style={{ width: `${scrolled}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
