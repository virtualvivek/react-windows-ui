const AppThemeImportCode =
`import { AppTheme } from 'react-windows-ui'`;
const ColorPickerItemImportCode =
`import { ColorPickerItem } from 'react-windows-ui'`;

const AppThemeUsageCode =
`<AppTheme
  color={'#16ab9c'}
  mode={'light'}
/>`;

const ColorPickerItemUsageCode =
`<ColorPickerItem
  defaultChecked
  name="some name"
  color="#0078D7"
  onChange={ () => {}}
/>`;


export {
    AppThemeImportCode,
    AppThemeUsageCode,
    ColorPickerItemImportCode,
    ColorPickerItemUsageCode
}