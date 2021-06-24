import React from 'react'

export interface MenuBarProps {
    searchPlaceholder ?: string;
    label ?: string;
    data ?: string[];
}
declare const MenuBar: React.SFC<MenuBarProps>

export default MenuBar