import React from "react";

export interface ColorPickerItemProps {
  name ?: string;
  color ?: string;
  disabled ?: boolean;
  onChange ?: Function;
  width ?: number | string;
  height ?: number | string;
  defaultChecked ?: boolean;
}
declare const ColorPickerItem: React.FC<ColorPickerItemProps>;

export default ColorPickerItem;