import React from "react";
import MenuList from "./MenuList";

const SubMenu = (props) => {
  return (
    <li
      key={props.label}
      className="cmdbar-menu-list-item">
      <span onClick={props.onClick}
        {...(props.children && { "data-win-toggle": "dropdown" })}>
        {props.icon}{props.label}
      </span>
      <MenuList
        ref={props.ref}
        listData={props.listData}
        listIndex={props.listData}
        onItemClick={props.onSubMenuItemClick}
      />
    </li>
  )
}

SubMenu.defaultProps = {
  onClick: () => {}
}

export default SubMenu;