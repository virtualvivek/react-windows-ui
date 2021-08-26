import React, { useState } from 'react'

const NavBarSubMenu = (props) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="app-nav-submenu">
      <div
        className="app-nav-submenu-title"
        onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        <div className="app-nav-submenu-icon">{isActive ? props.expandIcon : props.collapseIcon}</div>
      </div>
      <div className={isActive ? "app-nav-submenu-content show"
                               : "app-nav-submenu-content"}>
        {props.children}
      </div>
    </div>
  );
}

NavBarSubMenu.defaultProps = {
  collapseIcon: <i className="icons10-angle-down"></i>,
  expandIcon: <i className="icons10-angle-up"></i>,
}

export default NavBarSubMenu