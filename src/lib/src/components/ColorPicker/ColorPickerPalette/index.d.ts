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
declare const ColorPickerItem: React.FC<ColorPickerItemProps>

export default ColorPickerItem