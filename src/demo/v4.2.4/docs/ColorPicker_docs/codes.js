const ColorPickerPaletteImportCode =
`import { ColorPickerPalette } from "react-windows-ui";`;

const ColorPickerItemImportCode =
`import { ColorPickerItem } from "react-windows-ui";`;

const ColorPickerPaletteUsageCode =
`<ColorPickerPalette
  color="#6632a8"
  onChange={(color) => function(color)}
/>`;

const ColorPickerItemUsageCode =
`<ColorPickerItem
  name="1"
  color="#6632a8"
  defaultChecked={true}
  onChange={(color) => function(color)}
/>`;


export {
  ColorPickerPaletteImportCode,
  ColorPickerItemImportCode,
  ColorPickerItemUsageCode,
  ColorPickerPaletteUsageCode
}