import React, { ReactNode } from 'react'

export interface ColorPickerItemProps {
  name ?: string;
  defaultChecked ?: boolean;
  disabled ?: boolean;
  width ?: number | string;
  height ?: number | string;
  color ?: string;
  onChange ?: Function;
}
declare const ColorPickerItem: React.FC<ColorPickerItemProps>

export default ColorPickerItem