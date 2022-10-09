import React, { useState, useRef, Children, useMemo } from "react";
import { useOutSideClick } from "../../_hooks";
import { getScreenOffset } from "../../_api";
import { Link } from "react-router-dom";
import CmdBarSubMenu from "./CmdBarSubMenu";

const CommandBarMenu = (props) => {

  let _menu_trigger;
  const wrapperRef = useRef(null);
  const subMenusRef = useRef([]);
  const [currentSubMenu, setCurrentSubMenu] = useState(null);
  const [isReverse, setReverse] = useState("");
  const [menubar, setMenubar] = useState(false);
  const [isMenuDirection, setMenuDirection] = useState("");

  const hideCurrentSubmenu = () => {
    if(currentSubMenu) {
      subMenusRef.current[currentSubMenu].classList.toggle("show");
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
      subMenusRef.current[currentSubMenu].classList.toggle("show");
    }
    setCurrentSubMenu(indx);
    subMenusRef.current[indx].classList.toggle("show");
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
            onClick={child.props.children ? () => openSubMenu(index) : () => _onItemClick(child.props)}
            to={child.props.link ? child.props.link : "#"}>
            {child.props.icon}{child.props.label}
            {child.props.children ? <i className="icons10-angle-right"></i>:<></>}
          </Link>
          {Array.isArray(child.props.children)
            ? <ul
                onClick={() => hideAllMenu()}
                ref={(el) => (subMenusRef.current[index] = el)}
                className="app-cmdbar-menu-list cmdbar-submenu">
            { child.props.children.map((child_, index) => {
                return [
                  child_.type === CmdBarSubMenu && (
                    <CmdBarSubMenu key={index} label={child_.props.label} icon={child_.props.icon}/>
                  )
                ]
              })
            }
            </ul>
            : child.props.children
            ? <ul ref={(el) => (subMenusRef.current[index] = el)}
                className="app-cmdbar-menu-list cmdbar-submenu">
                <CmdBarSubMenu key={index} label={child.props.children.props.label} icon={child.props.children.props.icon}/>
              </ul>
            : <></>
          }
        </li>
      ),
      child.type === CommandBarMenuItemDivider && (
        <CommandBarMenuItemDivider/>
      )
    ];
  });

  Children.forEach(props.children, child => {
    if (child.type === CommandBarMenuTrigger) {
      return _menu_trigger = child;
    }
  });
  if (!_menu_trigger) _menu_trigger = <button className="app-cmdbar-button">
                          <i className="icons10-angle-down"></i>
                        </button>


  return (
    <div ref={wrapperRef} className="app-cmdbar-menu">
      <div className="app-cmdbar-menu-trigger" onClick={toggleMenuBar}>
        {_menu_trigger}
      </div>
      <ul className={ menubar ? `app-cmdbar-menu-list show${isReverse}${isMenuDirection}` : "app-cmdbar-menu-list"}>
        {renderMenuItems}
      </ul>
    </div>
  )
}

const CommandBarMenuItemDivider = () => <hr className="cmdbar-menu-list-item-hr"></hr>;
const CommandBarMenuItem = ({ children }) => <>{children}</>;
const CommandBarMenuTrigger = ({ children }) => <>{children}</>;

CommandBarMenuItem.defaultProps = {
  onClick: () => {}
}

CommandBarMenu.MenuItem = CommandBarMenuItem;
CommandBarMenu.MenuItemDivider = CommandBarMenuItemDivider;
CommandBarMenu.MenuTrigger = CommandBarMenuTrigger;
CommandBarMenu.MenuSubItem = CmdBarSubMenu;

export default CommandBarMenu;