import React from "react";
import MenuDialog from "./MenuDialog";
import MenuList from "./MenuList";
import MenuListItem from "./MenuListItem";
import MenuDivider from "./MenuDivider";
import SubMenu from "./SubMenu";

const MenuBar = (props) => {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}

MenuBar.Dialog = MenuDialog;
MenuBar.List = MenuList;
MenuBar.ListItem = MenuListItem;
MenuBar.Divider = MenuDivider;
MenuBar.SubMenu = SubMenu;

export default MenuBar;