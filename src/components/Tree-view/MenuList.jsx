import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  return (
    <>
      <ul className="space-y-4 pl-2">
        {list && list.length
          ? list.map((val) => <MenuItem item={val} />)
          : null}
      </ul>
    </>
  );
}

export default MenuList;
