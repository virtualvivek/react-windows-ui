import React from "react";
import CommandBarButton from "./CommandBarButton";
import CommandBarMenu from "./CommandBarMenu";

const CommandBar = (props) => {
  return (
    <div
      className="app-cmd-bar"
      style={{
        backgroundColor: props.backgroundColor,
        ...props.style}}>
        {props.children}
    </div>
  )
}

const CommandBarSplitDivider = () => <hr></hr>;

CommandBar.Button = CommandBarButton;
CommandBar.Menu = CommandBarMenu;
CommandBar.MenuItem = CommandBarMenu.MenuItem;
CommandBar.MenuSubItem = CommandBarMenu.MenuSubItem;
CommandBar.MenuTrigger = CommandBarMenu.MenuTrigger;
CommandBar.SplitDivider = CommandBarSplitDivider;
CommandBar.MenuItemDivider = CommandBarMenu.MenuItemDivider;

export default CommandBar;