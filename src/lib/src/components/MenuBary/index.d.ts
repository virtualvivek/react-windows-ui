import React, { FC } from "react";

export interface MenuBarProps {
  label ?: string;
  data ?: string[];
  showSearchBar ?: boolean;
  searchPlaceholder ?: string;
}
declare const MenuBar: FC<MenuBarProps>;

export default MenuBar;