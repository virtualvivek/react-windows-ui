import React, { useState, useEffect } from "react";
import { ThemeManager } from "../../_api";

const NavBar = (props) => {

  const [isScrolling, setScrolling] = useState(false);
  const [sidebar_collapsed, setSidebarCollapsed] = useState(false);
  const [sidebar_float_collapsed, setSidebarFloatCollapsed] = useState("");
  const [sidebar_onmount_collapsed, setSidebarOnMountCollapsed] = useState(props.collapsed ? "app-navbar-wrap toggled" : "app-navbar-wrap");
  
  useEffect(() => { ThemeManager.createAlphaPrimaryColor(); }, []);

  const showSidebar = () => {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // If Click is Made on Small Screen Device --------
    if(width < 760) {
      setSidebarFloatCollapsed(sidebar_float_collapsed === "" ? " toggled-float" : "");
    }
    // If Click is Made on Large Screen Device --------
    else {
      if(sidebar_onmount_collapsed === "app-navbar-wrap toggled") {
        setSidebarOnMountCollapsed("app-navbar-wrap");
      }
      else {
        setSidebarCollapsed(sidebar_collapsed ? false : true);
      }
    }
  }

  const onUlClickItems = (e) => {
    if (e.target && e.target.matches("a")) {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if(width < 760) {
        setSidebarFloatCollapsed("");
      }
    }
  }
  
  const scrollEvent = (e) => { e.target.scrollTop < 50 ? setScrolling(false) : setScrolling(true); }

  function resizedw() {
    document.getElementById("app-navbar-wrap-id").style.transition = "";
    document.querySelector("#app-navbar-wrap-id nav").style.transition = "";
  }

  var on_resizew;
  window.onresize = function() {
    clearTimeout(on_resizew);
    document.getElementById("app-navbar-wrap-id").style.transition = "unset";
    document.querySelector("#app-navbar-wrap-id nav").style.transition = "unset";
    on_resizew = setTimeout(resizedw, 100);
  };


  return (
    <div
      ref={props.ref}
      id="app-navbar-wrap-id"
      className={sidebar_collapsed ? `app-navbar-wrap toggled${sidebar_float_collapsed}` : `${sidebar_onmount_collapsed}${sidebar_float_collapsed}`}>
      <div className="app-navbar-topbar-mobile">
        <span className="app-navbar-toggle-button" onClick={showSidebar}></span>
        {props.titleBarMobile}
      </div>  
      <nav className="animate" onScroll={scrollEvent}>
        <div className="app-navbar-header"
          style={ props.shadowOnScroll ?
                  isScrolling
                  ? { boxShadow: "0 6px 8px -8px var(--color-link-bg-active)" }
                  : { boxShadow : "" }
                  : { boxShadow: "" }
                }>
          <span className="app-navbar-toggle-button" onClick={showSidebar}></span>
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
      <div onClick={showSidebar}
        className={sidebar_float_collapsed === " toggled-float" ? "app-navbar-overlay show" : "app-navbar-overlay"}>
      </div>
    </div>	 
  );
}

export default NavBar;