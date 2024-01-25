import React from "react";
import MenuDialog from "./MenuDialog";
import MenuList from "./MenuList";
import MenuListItem from "./MenuListItem";
import MenuDivider from "./MenuDivider";

const MenuBary = (props) => {

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}


MenuBary.Dialog = MenuDialog;
MenuBary.List = MenuList;
MenuBary.ListItem = MenuListItem;
MenuBary.Divider = MenuDivider;

export default MenuBary;