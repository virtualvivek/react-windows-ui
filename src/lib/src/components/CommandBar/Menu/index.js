import React, { useState, useRef, Children, useMemo } from "react";
import { useOutSideClick } from "../../../hooks";
import { getScreenOffset } from "../../../api";
import MenuList from "./MenuList";
import MenuItem from "./MenuItem";

const CommandBarMenu = (props) => {

  let _menu_trigger = <button className="ui-cmdbar-button"><i className="icons10-angle-down"></i></button>;
  
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

  useOutSideClick(wrapperRef, () => hideAllMenu());

  const toggleMenuBar = () => {
    setMenubar(!menubar);
    getScreenOffset(wrapperRef) ? setReverse(" reverse") : setReverse("");
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
    props.menuDirection === "leftJustify" ? setMenuDirection(" leftJustify") : setMenuDirection("");
  }, [props.menuDirection]);

  const renderMenuItems = props.children.map((child, index) => {
    return [
      child.type === CommandBarMenuItem && (
        <MenuItem
          icon={child.props.icon}
          label={child.props.label}
          onClick={() => _onItemClick(child.props)}
        />
      ),
      child.type === CommandBarSubMenu && (
        <MenuItem
          icon={child.props.icon}
          label={child.props.label}
          onClick={() => openSubMenu(index)}>
          <MenuList
            listIndex={index-1}
            listData={child.props}
            onItemClick={() => hideAllMenu()}
            ref={(el) => (subMenusRef.current[index] = el)}
          />
        </MenuItem>
      ),
      child.type === CommandBarMenuItemDivider && (
        <CommandBarMenuItemDivider key={index}/>
      )
    ];
  });

  Children.forEach(props.children, child => {
    if (child.type === CommandBarMenuTrigger) { return _menu_trigger = child; }
  });


  return (
    <div ref={wrapperRef} className="ui-cmdbar-menu">
      <div className="ui-cmdbar-menu-trigger" onClick={toggleMenuBar}>
        {_menu_trigger}
      </div>
      <ul className={ menubar
        ? `ui-cmdbar-menu-list show${isReverse}${isMenuDirection}`
        : "ui-cmdbar-menu-list"}>
        {renderMenuItems}
      </ul>
    </div>
  )
}

const CommandBarMenuItem = ({ children }) => <>{children}</>;
const CommandBarSubMenu = ({ children }) => <>{children}</>;
const CommandBarMenuTrigger = ({ children }) => <>{children}</>;
const CommandBarMenuItemDivider = () => <hr className="cmdbar-menu-list-item-hr"></hr>;

CommandBarMenuItem.defaultProps = {
  onClick: () => {}
}

CommandBarMenu.MenuItem = CommandBarMenuItem;
CommandBarMenu.MenuTrigger = CommandBarMenuTrigger;
CommandBarMenu.MenuItemDivider = CommandBarMenuItemDivider;
CommandBarMenu.SubMenu = CommandBarSubMenu;

export default CommandBarMenu;