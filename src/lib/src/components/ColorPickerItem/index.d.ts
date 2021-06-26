import React, { ReactNode, Component } from 'react'

export interface ColorPickerItemProps {
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    width?: number | string;
    height?: number | string;
    color?: string;
    image?: ReactNode;
    onChange?: Function;
}
declare const ColorPickerItem: Component<ColorPickerItemProps>

export default ColorPickerItem
