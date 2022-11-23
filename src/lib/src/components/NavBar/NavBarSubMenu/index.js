import React, { useState, useRef, useLayoutEffect } from "react";

const NavBarSubMenu = (props) => {
  const panelRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [contentHeight, setContentHeight] = useState(100);

  useLayoutEffect(() => {
    let height_ = 0;
    panelRef.current?.childNodes.forEach((node) => {
        let _platform = window.getComputedStyle(document.documentElement).getPropertyValue("--platform");
        let _margin = _platform.includes("windows11") ? 5.5 : 0;
        height_ += node?.clientHeight+_margin;
    });
    setContentHeight(height_);
  }, []);


  return (
    <div className="app-navbar-submenu">
      <div
        className="app-navbar-submenu-title"
        onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        {isActive ? props.expandIcon : props.collapseIcon}
      </div>
      <div
        ref={panelRef}
        style={isActive ? {height: contentHeight} : {height: 0}}
        className={isActive ? "app-navbar-submenu-content show"
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