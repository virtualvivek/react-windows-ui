const AppThemeImportCode =
`import { AppTheme } from "react-windows-ui";`;

const AppThemeUsageCode =
`<AppTheme
  color={'#16ab9c'}
  scheme={'light'}
  onColorChange={() => {}}
  onSchemeChange={() => {}}
/>`;

const SwitchThemeUsageCode =
`changeMode = (e) => {
  e.target.checked ?
    this.setState({app_mode: 'light'}) :
    this.setState({app_mode: 'dark'})
}

<AppTheme
  scheme={this.state.app_mode}
/>

<Switch
  labelOn="Mode O"
  labelOff="Mode I"
  defaultChecked={true}
  onChange={(e) => {this.changeMode(e)}}
/>`;


export {
    AppThemeImportCode,
    AppThemeUsageCode,
    SwitchThemeUsageCode
}