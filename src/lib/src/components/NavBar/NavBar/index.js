import React, { useState, useRef, useEffect } from "react";

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
    // If Click on <Small Screen Device> else <Large Screen Device> --
    width < 760
      ? setSidebarFloatCollapsed(sidebar_float_collapsed === "" ? " collapsed-float" : "")
      : toggleLargeNavbar(()=> setSidebarCollapsed(sidebar_collapsed ? false : true));
  }

  const onUlClickItems = (e) => {
    if (e.target && e.target.matches("a")) {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if(width < 760) { setSidebarFloatCollapsed(""); }
    }
  }

  useEffect(()=> {
    let NavSearch = document.getElementById("ui-navbar-list").getElementsByClassName("ui-input-search-box")[0];
    NavSearch?.addEventListener("click", () => {
      if(sidebar_collapsed) { setSidebarCollapsed(false); }
    });
  }, [sidebar_collapsed]);
  
  const scrollEvent = (e) => { e.target.scrollTop < 50 ? setScrolling(false) : setScrolling(true); }


  function resizedw() { navRef.current.style.transition = ""; }
  var on_resizew;
  window.onresize = function() {
    clearTimeout(on_resizew);
    navRef.current.style.transition = "unset";
    on_resizew = setTimeout(resizedw, 100);
  };


  return (
    <aside
      ref={props.ref}
      role="navigation"
      id="ui-navbar-wrap"
      className={sidebar_collapsed
      ? `ui-navbar-wrap collapsed${sidebar_float_collapsed}`
      : `ui-navbar-wrap${sidebar_float_collapsed}`}>
      <div className="ui-navbar-header-mobile">
        <span className="ui-navbar-toggler" onClick={showSidebar} aria-label="Toggle navigation"></span>
        {props.titleBarMobile}
      </div>
      <nav className="ui-navbar" ref={navRef}>
        <div
          className="ui-navbar-header"
          style={ props.shadowOnScroll ?
                  isScrolling
                  ? { boxShadow: "0 4px 8px -8px #77777777" }
                  : { boxShadow : "" }
                  : { boxShadow: "" }
                }>
          <span className="ui-navbar-toggler" onClick={showSidebar} aria-label="Toggle navigation"></span>
          <span className="ui-navbar-name">{props.title}</span>
        </div>
        <ul
          id="ui-navbar-list"
          onScroll={scrollEvent}
          className="ui-navbar-list"
          onClick={(e) => onUlClickItems(e)}>
            {props.children}
        </ul>
      </nav>
      <div
        onClick={showSidebar}
        className={sidebar_float_collapsed === " collapsed-float"
          ? "ui-navbar-overlay show"
          : "ui-navbar-overlay"}>
      </div>
    </aside>
  );
}

export default NavBar;