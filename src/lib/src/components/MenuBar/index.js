import React, { forwardRef, useImperativeHandle, useState, useRef, useMemo, useLayoutEffect } from "react";
import { useOutSideClick } from "../../hooks";
import { getScreenOffset } from "../../api";
import MenuList from "./Menu/MenuList";
import MenuItem from "./Menu/MenuItem";

const MenuBar = forwardRef((props, ref) => {
  const {
    children,
    anchorRef,
    menuDirection
  } = props;
  
  const subMenusRef = useRef([]);
  const dialogRef = useRef(null);
  const [isShow, setShow] = useState("");
  const [isReverse, setReverse] = useState("");
  const [isMenuDirection, setMenuDirection] = useState("");
  const [currentSubMenu, setCurrentSubMenu] = useState(null);

  useImperativeHandle(ref, () => ({
    openDialog: () => {
      if (anchorRef.current && dialogRef.current) {
        setShow(" show");
      } else {
        console.error("anchorRef or ref should not be empty for MenuBar Dialog");
      }
    },
    closeDialog: () => {
      setShow("");
    },
  }));

  useLayoutEffect(() => {
    if (isShow === " show" && dialogRef.current) {
      // Measure dialog height synchronously after render
      const dialogHeight = dialogRef.current.getBoundingClientRect().height;
      const rect = anchorRef.current.getBoundingClientRect();
      const scrollLeft = document.documentElement.scrollLeft;
      const scrollTop = document.documentElement.scrollTop;

      if (getScreenOffset(anchorRef)) {
        setReverse(" reverse");
        dialogRef.current.style.top = `${rect.top + scrollTop - (dialogHeight + 10)}px`;
      } else {
        setReverse("");
        dialogRef.current.style.top = `${rect.bottom + scrollTop}px`; // Adjusted for vertical scroll
      }
      dialogRef.current.style.left = `${rect.left + scrollLeft}px`; // Adjusted for horizontal scroll
    }
  }, [isShow, anchorRef, dialogRef]);

  const hideCurrentSubmenu = () => {
    if(currentSubMenu) {
      subMenusRef.current[currentSubMenu].toggleShow();
      setCurrentSubMenu(null);
    }
  }

  const hideAllMenu = () => {
    setShow("");
    hideCurrentSubmenu();
  }

  useOutSideClick(dialogRef, () => hideAllMenu());

  const openSubMenu = (indx) => {
    if(currentSubMenu) {
      subMenusRef.current[currentSubMenu].toggleShow();
    }
    setCurrentSubMenu(indx);
    subMenusRef.current[indx].toggleShow();
  }

  const _onItemClick = (child_props) => {
    setShow("");
    child_props.onClick();
    hideCurrentSubmenu();
  }

  useMemo(() => {
    menuDirection === "leftJustify"? setMenuDirection(" leftJustify") : setMenuDirection("");
  }, [menuDirection]);


  const renderItems = children.map((child, index) => {
    return [
      child.type === UiMenuItem && (
        <MenuItem
          key={index}
          icon={child.props.icon}
          label={child.props.label}
          onClick={() => _onItemClick(child.props)}
        />
      ),
      child.type === UiSubMenu && (
        <MenuItem
          key={index}
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
      child.type === UiItemDivider && (
        <UiItemDivider key={index}/>
      )
    ];
  });


  return (
    <ul
      ref={dialogRef}
      className={`ui-menu-list-dialog${isShow}${isReverse}${isMenuDirection} ui-backdrop-blur`}>
      {renderItems}
    </ul>
  );
});

const UiMenuItem = ({ children }) => <>{children}</>;
const UiSubMenu = ({ children }) => <>{children}</>;
const UiItemDivider = () => <hr className="ui-menu-list-item-hr"></hr>;

UiMenuItem.defaultProps = {
  onClick: () => {}
}

MenuBar.Item = UiMenuItem;
MenuBar.Item.Divider = UiItemDivider;
MenuBar.Item.SubMenu = UiSubMenu;

export default MenuBar;