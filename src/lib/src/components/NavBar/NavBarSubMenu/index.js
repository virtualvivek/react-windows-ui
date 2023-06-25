import React, { useState, useRef, useLayoutEffect } from "react";

const NavBarSubMenu = (props) => {
  const panelRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [contentHeight, setContentHeight] = useState(100);

  useLayoutEffect(() => {
    setTimeout(() => {
      setContentHeight(panelRef.current.scrollHeight);
    }, 150);
  }, []);


  return (
    <div className="app-navbar-submenu">
      <div
        aria-expanded={isActive}
        className="app-navbar-submenu-title"
        onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
      </div>
      <div
        ref={panelRef}
        style={isActive ? {height: contentHeight} : {height: ""}}
        className={isActive ? "app-navbar-submenu-content show"
                            : "app-navbar-submenu-content"}>
        {props.children}
      </div>
    </div>
  );
}

export default NavBarSubMenu;