import React from "react";
import CommandBarButton from "./CommandBarButton";
import CommandBarMenu from "./CommandBarMenu";

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
CommandBar.Menu = CommandBarMenu;
CommandBar.Menu.Item = CommandBarMenu.MenuItem;
CommandBar.Menu.ItemDivider = CommandBarMenu.MenuItemDivider;
CommandBar.Menu.Trigger = CommandBarMenu.MenuTrigger;
CommandBar.SplitDivider = CommandBarSplitDivider;

export default CommandBar;