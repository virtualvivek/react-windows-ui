import React, { useState, useRef, Children, useMemo } from "react";
import { useOutSideClick } from "../../_hooks";
import { getScreenOffset } from "../../_api";
import { Link } from "react-router-dom";

const CommandBarMenu = (props) => {

  let _panel;
  const wrapperRef = useRef(null);
  const [isReverse, setReverse] = useState("");
  const [menubar, setMenubar] = useState(false);
  const [isMenuDirection, setMenuDirection] = useState("");
  
  useOutSideClick(wrapperRef, () => setMenubar(false));

  const toggleMenuBar = () => {
    setMenubar(!menubar);
    getScreenOffset(wrapperRef) ? setReverse(" reverse") :  setReverse("");
  }

  useMemo(() => {
    props.menuDirection === "leftJustify"
      ? setMenuDirection(" leftJustify")
      : setMenuDirection("");
  }, [props.menuDirection]);

  const renderMenuItems = props.children.map((child, index) => {
    return [
      child.type === CommandBarMenuItem && (
        <li
          onClick={toggleMenuBar}
          className="cmdbar-menu-list-item"
          key={child.props.label}>
          <Link
            to={child.props.link ? child.props.link : "#"}
            onClick={child.props.onClick}>
            {child.props.icon}{child.props.label}
          </Link>
        </li>
      )
    ];
  });

  Children.forEach(props.children, child => {
    if (child.type === CommandBarMenuTrigger) {
      return _panel = child;
    }
  });
  if (!_panel) _panel = <button className="app-cmdbar-button">
                          <i className="icons10-angle-down"></i>
                        </button>


  return (
    <div ref={wrapperRef} className="app-cmdbar-menu">
      <div className="app-cmdbar-menu-trigger" onClick={toggleMenuBar}>
        {_panel}
      </div>
      <ul className={ menubar ? `app-cmdbar-menu-list show${isReverse}${isMenuDirection}` : "app-cmdbar-menu-list"}>
        {renderMenuItems}
      </ul>
    </div>
  )
}

const CommandBarMenuItem = ({ children }) => <>{children}</>
const CommandBarMenuTrigger = ({ children }) => <>{children}</>

CommandBarMenu.MenuItem = CommandBarMenuItem;
CommandBarMenu.MenuTrigger = CommandBarMenuTrigger;

export default CommandBarMenu;