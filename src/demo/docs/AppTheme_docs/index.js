import React from 'react'
import { NavPageContainer, Switch, AppTheme, Link, Appearance } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppThemeImportCode, AppThemeUsageCode, ColorPickerItemUsageCode } from './codes'
import PropsView from './props-view'

class AppThemeDocs extends React.Component {

  state = {
    app_color: '',
    app_mode: '',
    app_get_theme :''
  }

  changeTheme = (color) => {
    this.setState({app_color: color.target.value});
  }

  changeMode = (e) => {
    e.target.checked ?
      this.setState({app_mode: 'light'}) :
      this.setState({app_mode: 'dark'})
  }

  getTheme = () =>{
    let v = Appearance.getColorScheme()
    this.setState({app_get_theme: v})
  }

  render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>

    <h1>AppTheme {this.state.app_get_theme}</h1>

    <AppTheme
      color={this.state.app_color}
      scheme={this.state.app_mode}
      onColorChange={()=> {}}
      onSchemeChange={()=> {}}
    />

    

    <p><span className="color-primary">AppTheme</span> is a component used for changing <b>App's primary color</b> and Mode to either <b>Light or Dark</b> at Runtime.</p>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {AppThemeImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {AppThemeUsageCode}
    </SyntaxHighlighter>

    <h2>Props</h2>
    <PropsView />

    <h2>Switch Day-Night Mode with <p className="app-code">AppTheme</p></h2>

    <Switch
      defaultChecked={true}
      labelOn="Mode O"
      labelOff="Mode I"
      onChange={(e) => {this.changeMode(e)}}
    />

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ColorPickerItemUsageCode}
    </SyntaxHighlighter>


    <br/><Link to="/apptheme_external" target="_blank"><span style={{fontSize:24}}>View This Page Source <i className="icons10-arrow-right"></i></span></Link>

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
  );
 }
}

export default AppThemeDocs