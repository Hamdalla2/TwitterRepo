import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon className='MuiSvgIcon-root' />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;