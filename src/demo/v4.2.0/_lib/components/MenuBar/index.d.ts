import React, { FC } from 'react'

export interface MenuBarProps {
  label ?: string;
  data ?: string[];
  searchPlaceholder ?: string;
  showSearchBar ?: boolean;
}
declare const MenuBar: FC<MenuBarProps>

export default MenuBar