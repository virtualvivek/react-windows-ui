import React from "react";

export interface ColorPickerPaletteProps {
  color ?: any;
  disabled ?: boolean;
  onChange ?: Function;
  width ?: number | string;
  height ?: number | string;
}
declare const ColorPickerPalette: React.FC<ColorPickerPaletteProps>;

export default ColorPickerPalette;