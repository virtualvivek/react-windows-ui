import React, { useState, useRef, Children, useMemo } from "react";
import { useOutSideClick } from "../../../hooks";
import { getScreenOffset } from "../../../api";
import { Link } from "react-router-dom";
import SubMenuItem from "./SubMenuItem";
import SubMenuList from "./SubMenuList";

const CommandBarMenu = (props) => {

  let _menu_trigger= <button className="app-cmdbar-button"><i className="icons10-angle-down"></i></button>;
  
  const subMenusRef = useRef([]);
  const wrapperRef = useRef(null);
  
  const [isReverse, setReverse] = useState("");
  const [menubar, setMenubar] = useState(false);
  const [isMenuDirection, setMenuDirection] = useState("");
  const [currentSubMenu, setCurrentSubMenu] = useState(null);

  const hideCurrentSubmenu = () => {
    if(currentSubMenu) {
      subMenusRef.current[currentSubMenu].toggleShow();
      setCurrentSubMenu(null);
    }
  }

  const hideAllMenu = () => {
    setMenubar(false);
    hideCurrentSubmenu();
  }

  useOutSideClick(wrapperRef, () => {
    hideAllMenu();
  });

  const toggleMenuBar = () => {
    setMenubar(!menubar);
    getScreenOffset(wrapperRef) ? setReverse(" reverse") :  setReverse("");
  }

  const openSubMenu = (indx) => {
    if(currentSubMenu) {
      subMenusRef.current[currentSubMenu].toggleShow();
    }
    setCurrentSubMenu(indx);
    subMenusRef.current[indx].toggleShow();
  }

  const _onItemClick = (child_props) => {
    setMenubar(!menubar);
    child_props.onClick();
    hideCurrentSubmenu();
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
          key={child.props.label}
          className="cmdbar-menu-list-item">
          <Link
            onClick={child.props.children
              ? () => openSubMenu(index)
              : () => _onItemClick(child.props)}
            to={child.props.link ? child.props.link : "#"}>
            {child.props.icon}{child.props.label}
            {child.props.children ? <i className="icons10-angle-right"></i>:<></>}
          </Link>
          <SubMenuList
            ref={(el) => (subMenusRef.current[index] = el)}
            listData={child.props}
            listIndex={index-1}
            onItemClick={() => hideAllMenu()}
          />
        </li>
      ),
      child.type === CommandBarMenuItemDivider && (
        <CommandBarMenuItemDivider key={index}/>
      )
    ];
  });

  Children.forEach(props.children, child => {
    if (child.type === CommandBarMenuTrigger) {
      return _menu_trigger = child;
    }
  });


  return (
    <div ref={wrapperRef} className="app-cmdbar-menu">
      <div className="app-cmdbar-menu-trigger" onClick={toggleMenuBar}>
        {_menu_trigger}
      </div>
      <ul className={ menubar
        ? `app-cmdbar-menu-list show${isReverse}${isMenuDirection}`
        : "app-cmdbar-menu-list"}>
        {renderMenuItems}
      </ul>
    </div>
  )
}

const CommandBarMenuItem = ({ children }) => <>{children}</>;
const CommandBarMenuTrigger = ({ children }) => <>{children}</>;
const CommandBarMenuItemDivider = () => <hr className="cmdbar-menu-list-item-hr"></hr>;

CommandBarMenuItem.defaultProps = {
  onClick: () => {}
}

CommandBarMenu.MenuSubItem = SubMenuItem;
CommandBarMenu.MenuItem = CommandBarMenuItem;
CommandBarMenu.MenuTrigger = CommandBarMenuTrigger;
CommandBarMenu.MenuItemDivider = CommandBarMenuItemDivider;

export default CommandBarMenu;