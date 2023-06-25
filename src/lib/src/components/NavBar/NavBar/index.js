import React, { useState, useRef } from "react";

const NavBar = (props) => {

  const navRef = useRef(null);
  const [isScrolling, setScrolling] = useState(false);
  const [sidebar_collapsed, setSidebarCollapsed] = useState(props.collapsed ? true:false);
  const [sidebar_float_collapsed, setSidebarFloatCollapsed] = useState("");

  const toggleLargeNavbar = (callback) => {
    navRef.current.style.transition = "transform 0.2s ease, width 0.2s ease";
    callback();
    setTimeout(() => { navRef.current.style.transition = "" }, 1000);
  }

  const showSidebar = () => {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // If Click is Made on <Small Screen Device> --------
    if(width < 760) {
      setSidebarFloatCollapsed(sidebar_float_collapsed === "" ? " collapsed-float" : "");
    }
    // If Click is Made on <Large Screen Device> --------
    else {
      toggleLargeNavbar(()=> setSidebarCollapsed(sidebar_collapsed ? false : true))
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
    navRef.current.style.transition = "";
  }

  var on_resizew;
  window.onresize = function() {
    clearTimeout(on_resizew);
    navRef.current.style.transition = "unset";
    on_resizew = setTimeout(resizedw, 100);
  };


  return (
    <aside
      ref={props.ref}
      id="app-navbar-wrap"
      className={sidebar_collapsed
      ? `app-navbar-wrap collapsed${sidebar_float_collapsed}`
      : `app-navbar-wrap${sidebar_float_collapsed}`}>
      <div className="app-navbar-header-mobile">
        <span className="app-navbar-toggler" onClick={showSidebar}></span>
        {props.titleBarMobile}
      </div>
      <nav className="app-navbar" ref={navRef}>
        <div className="app-navbar-header"
          style={ props.shadowOnScroll ?
                  isScrolling
                  ? { boxShadow: "0 4px 8px -8px #77777777" }
                  : { boxShadow : "" }
                  : { boxShadow: "" }
                }>
          <span className="app-navbar-toggler" onClick={showSidebar}></span>
          <span className="app-navbar-name">{props.title}</span>
        </div>
        <ul
          className="app-navbar-list"
          id="app-navbar-list"
          onScroll={scrollEvent}
          onClick={(e) => onUlClickItems(e)}>
            {props.children}
        </ul>
      </nav>
      <div onClick={showSidebar}
        className={sidebar_float_collapsed === " collapsed-float" ? "app-navbar-overlay show" : "app-navbar-overlay"}>
      </div>
    </aside>
  );
}

export default NavBar;