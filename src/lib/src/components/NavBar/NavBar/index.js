import React, { useState, useEffect } from "react";
import { ThemeManager } from "../../_api";

const NavBar = (props) => {

  useEffect(() => {
    ThemeManager.createAlphaPrimaryColor();
  }, []);
  
  const [sidebar, setSidebar] = useState(false);
  const [isScrolling, setScrolling] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  const scrollEvent = (e) => { 
    // console.log(e.target.scrollTop)
    if(e.target.scrollTop < 50) { setScrolling(false) }
    else { setScrolling(true) }
  }

  return (
    <div
      className={sidebar ? "app-navbar-wrap toggled" : "app-navbar-wrap"}
      ref={props.ref}
      id="app-navbar-wrap-id">
      <div className="app-navbar-topbar-mobile">
        <span class="app-navbar-toggle-button" onClick={showSidebar}></span>
        <span className="app-navbar-name">{props.title}</span>
      </div>  
      <nav
        className="animate"
        onScroll={scrollEvent}>
        <div className="app-navbar-header"
          style={ props.shadowOnScroll ?
                  isScrolling ?
                  { boxShadow: "0 6px 8px -8px var(--color_link_bg_hover)"}
                : {boxShadow : ""}
                : {boxShadow: ""}
            }>
          <span className="app-navbar-toggle-button" onClick={showSidebar}>
          </span>
          <span className="app-navbar-name">{props.title}</span>
        </div>
        <ul
          className={props.mobileHasIcons
            ? "app-navbar-list app-mobile-has-icons"
            : "app-navbar-list"  }>
          {props.children}
        </ul>
      </nav>
    </div>	 
  );
}

export default NavBar;