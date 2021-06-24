import React, { ReactNode } from 'react'

export interface ColorPickerItemProps {
    name ?: string;
    checked ?: boolean;
    disabled ?: boolean;
    width ?: number | string;
    height ?: number | string;
    color ?: string;
    image ?: ReactNode;
    onChange ?: Function;
}
declare const ColorPickerItem: React.SFC<ColorPickerItemProps>

export default ColorPickerItem