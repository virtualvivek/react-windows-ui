import React, { FC } from 'react'

export interface MenuBarProps {
    searchPlaceholder ?: string;
    label ?: string;
    data ?: string[];
}
declare const MenuBar: FC<MenuBarProps>

export default MenuBar