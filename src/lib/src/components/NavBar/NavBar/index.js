import React, { useState, useEffect } from "react";
import { ThemeManager } from "../../_api";

const NavBar = (props) => {

  const [isScrolling, setScrolling] = useState(false);
  const [sidebar_collapsed, setSidebarCollapsed] = useState(false);
  const showSidebar = () => setSidebarCollapsed(!sidebar_collapsed);

  useEffect(() => { ThemeManager.createAlphaPrimaryColor(); }, []);

  const onUlClickItems = (e) => {
    if (e.target && e.target.matches("a")) {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if(width < 760) {
        setSidebarCollapsed(false);
      }
    }
  }
  
  const scrollEvent = (e) => {
    if(e.target.scrollTop < 50) {
      setScrolling(false);
    }
    else {
      setScrolling(true);
    }
  }

  return (
    <div
      ref={props.ref}
      id="app-navbar-wrap-id"
      className={sidebar_collapsed ? "app-navbar-wrap toggled" : "app-navbar-wrap"}>
      <div className="app-navbar-topbar-mobile">
        <span className="app-navbar-toggle-button" onClick={showSidebar}></span>
        {props.titleBarMobile}
      </div>  
      <nav className="animate"
        onScroll={scrollEvent}>
        <div className="app-navbar-header"
          style={ props.shadowOnScroll ?
                  isScrolling
                  ? { boxShadow: "0 6px 8px -8px var(--color_link_bg_active)" }
                  : { boxShadow : "" }
                  : { boxShadow: "" }
            }>
          <span className="app-navbar-toggle-button" onClick={showSidebar}>
          </span>
          <span className="app-navbar-name">{props.title}</span>
        </div>
        <ul className={props.mobileHasIcons
            ? "app-navbar-list app-mobile-has-icons"
            : "app-navbar-list" }
            id="app-navbar-list"
            onClick={(e) => onUlClickItems(e)}>
          {props.children}
        </ul>
      </nav>
      <div
        onClick={showSidebar}
        className={sidebar_collapsed ? "app-navbar-overlay show" : "app-navbar-overlay"}>
      </div>
    </div>	 
  );
}

export default NavBar;