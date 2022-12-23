const AppThemeImportCode =
`import { AppTheme } from "react-windows-ui";`;

const AppThemeUsageCode =
`<AppTheme
  scheme={"light"}
  color={"#16ab9c"}
  colorDarkMode={"#1ee6d1"}
  onColorChange={() => {}}
  onSchemeChange={() => {}}
/>`;

const SwitchThemeUsageCode =
`changeMode = (e) => {
  e.target.checked ?
    this.setState({app_mode: "light"}) :
    this.setState({app_mode: "dark"})
}

return (
  <div>
    <AppTheme
      scheme={this.state.app_mode}
    />
    <Switch
      onChange={(e) => {this.changeMode(e)}}
    />
  </div>
)`;


export {
    AppThemeImportCode,
    AppThemeUsageCode,
    SwitchThemeUsageCode
}