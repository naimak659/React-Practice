import React from "react";
import MenuList from "./MenuList";
import { menus } from "./data";

function TreeView() {
  return (
    <div className="w-1/6 h-screen px-4 py-6 bg-slate-950">
      <MenuList list={menus} />
    </div>
  );
}

export default TreeView;
