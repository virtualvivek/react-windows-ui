import React, { useState,useEffect } from "react";
import ThemeManager from "../../utils/ThemeManager";

const NavBar = (props) => {

  useEffect(() => {
    ThemeManager.createAlphaPrimaryColor();
  },[]);
  
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
      className={sidebar ? "app-nav-wrap toggled" : "app-nav-wrap"}
      ref={props.ref}
      id="app-nav-wrap-id"> 
      <nav
        className="animate"
        onScroll={scrollEvent}>
        <div className="app-nav-header"
          style={ props.shadowOnScroll ?
                  isScrolling ?
                  { boxShadow: "0 6px 8px -8px var(--color_link_bg_hover)"}
                : {boxShadow : ""}
                : {boxShadow: ""}
            }>
          <span
            className="app-nav-toggle-button"
            onClick={showSidebar}>
          </span>
          <span className="app-name">{props.title}</span>
        </div>
        <ul
          className={props.mobileHasIcons
            ? "app-nav-list app-mobile-has-icons"
            : "app-nav-list"  }>
          {props.children}
        </ul>
      </nav>
    </div>	 
  );
}

export default NavBar;