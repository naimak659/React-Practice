import React from "react";

function Suggestions({ click, data, activeIndex }, ref) {
  return (
    <>
      <div className="relative">
        <ul className="text-white space-y-2">
          {data.map((val, i) => {
            return (
              <li
                className={`bg-indigo-950 py-1 px-3 hover: active:bg-indigo-400 rounded ${
                  activeIndex == i ? `bg-indigo-800` : null
                }`}
                onClick={click}
                key={i}
              >
                {val}
              </li>
            );
          })}
        </ul>
        <div></div>
      </div>
    </>
  );
}

export default Suggestions;
