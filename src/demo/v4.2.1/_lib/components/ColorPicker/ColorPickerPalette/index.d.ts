import React from 'react'

export interface ColorPickerPaletteProps {
  disabled ?: boolean;
  width ?: number | string;
  height ?: number | string;
  color ?: any;
  onChange ?: Function;
}
declare const ColorPickerPalette: React.FC<ColorPickerPaletteProps>

export default ColorPickerPalette