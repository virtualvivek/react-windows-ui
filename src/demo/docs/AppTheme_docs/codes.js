const AppThemeImportCode =
`import { AppTheme } from 'react-windows-ui'`;
const ColorPickerItemImportCode =
`import { ColorPickerItem } from 'react-windows-ui'`;
const ColorPickerPaletteImportCode =
`import { ColorPickerPalette } from 'react-windows-ui'`;

const AppThemeUsageCode =
`<AppTheme
  color={'#16ab9c'}
  scheme={'light'}
/>`;

const ColorPickerItemUsageCode =
`<ColorPickerItem
  defaultChecked
  name="some name"
  color="#0078D7"
  onChange={ () => {}}
/>`;

const ColorPickerPaletteUsageCode =
`<ColorPickerPalette
  color="#0078D7"
  onChange={()=> {}}
/>`;


export {
    AppThemeImportCode,
    AppThemeUsageCode,
    ColorPickerItemImportCode,
    ColorPickerItemUsageCode,
    ColorPickerPaletteImportCode,
    ColorPickerPaletteUsageCode
}