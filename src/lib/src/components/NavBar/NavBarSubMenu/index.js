import React, { useState } from "react";

const NavBarSubMenu = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="app-navbar-submenu">
      <div
        className="app-navbar-submenu-title"
        onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        {isActive ? props.expandIcon : props.collapseIcon}
      </div>
      <div className={isActive ? "app-navbar-submenu-content show"
                               : "app-navbar-submenu-content"}>
        {props.children}
      </div>
    </div>
  );
}

NavBarSubMenu.defaultProps = {
  collapseIcon: <i className="icons10-angle-down"></i>,
  expandIcon: <i className="icons10-angle-up"></i>,
}

export default NavBarSubMenu;