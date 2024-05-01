import React, { useState } from "react";
import MenuList from "./MenuList";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  const handleChildren = (getLabel) => {
    setDisplayChildren({
      ...displayChildren,
      [getLabel]: !displayChildren[getLabel],
    });
  };
  console.log(displayChildren);
  return (
    <div>
      <li className="space-y-3 pl-3 list-disc">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{item.label}</p>
          {item.children && item && item.children.length ? (
            displayChildren[item.label] ? (
              <span onClick={() => handleChildren(item.label)}>
                <IoIosArrowUp />
              </span>
            ) : (
              <span onClick={() => handleChildren(item.label)}>
                <IoIosArrowDown />
              </span>
            )
          ) : null}
        </div>

        {item.children && displayChildren[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </li>
    </div>
  );
}

export default MenuItem;
