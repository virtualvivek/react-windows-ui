import React from "react";
import CommandBarButton from "./Button";
import CommandBarMenu from "./Menu";

const CommandBar = (props) => {
  return (
    <div
      className="ui-cmd-bar"
      style={{backgroundColor: props.backgroundColor, ...props.style}}>
      {props.children}
    </div>
  )
}

const CommandBarSplitDivider = () => <hr></hr>;

CommandBar.Button = CommandBarButton;
CommandBar.SplitDivider = CommandBarSplitDivider;

CommandBar.Menu = CommandBarMenu;
CommandBar.Menu.Item = CommandBarMenu.MenuItem;
CommandBar.Menu.SubMenu = CommandBarMenu.SubMenu;
CommandBar.Menu.Trigger = CommandBarMenu.MenuTrigger;
CommandBar.Menu.Item.Divider = CommandBarMenu.MenuItemDivider;

export default CommandBar;