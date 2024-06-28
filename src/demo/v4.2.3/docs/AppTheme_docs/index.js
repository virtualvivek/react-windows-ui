import React from 'react'
import { NavPageContainer, AppTheme, ColorPickerItem } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppThemeImportCode, AppThemeUsageCode } from './codes'
import PropsView from './props-view'
import Win11Wall from "../../../assets/win11Wall.jpg"
import './css/window-view.css'

class AppThemeDocs extends React.Component {

  state = {
    app_color: "",
    app_color_dark: ""
  }

  changeTheme = (color, colorDark = "#d927f2") => {
    this.setState({
      app_color: color.target.value,
      app_color_dark: colorDark
    });
  }

  render() {
    return (
    <NavPageContainer
      hasPadding
      animateTransition={false}>

      <h1>AppTheme</h1>
      <AppTheme
        color={this.state.app_color}
        colorDarkMode={this.state.app_color_dark}
      />

      <div className="windows-view11">
        <img src={Win11Wall} alt="win11UI"/>
        <div className="windows-view11_tile">
          <div className="windows-view11_button"></div>
        </div>
      </div>
      <br/>

      <div style={{display: "flex", gap: 5}}>  
        <ColorPickerItem
          defaultChecked
          name="1"
          color="#0078D7"
          onChange={ (color) => this.changeTheme(color, "#47aeff")}
        />
        <ColorPickerItem
          name="1"
          color="#6632a8"
          onChange={ (color) => this.changeTheme(color, "#9549f5")}
        />
        <ColorPickerItem
          name="1"
          color="#881798"
          onChange={ (color) => this.changeTheme(color, "#d927f2")}
        />
        <ColorPickerItem
          name="1"
          color="#038387"
          onChange={ (color) => this.changeTheme(color, "#05ebf2")}
        />
        <ColorPickerItem
          name="1"
          color="#00B294"
          onChange={ (color) => this.changeTheme(color, "#02f7ce")}
        />
        <ColorPickerItem
          name="1"
          color="#69797E"
          onChange={ (color) => this.changeTheme(color, "#b8cdd4")}
        />
      </div>


      <p><span className="ui-color-primary">AppTheme</span> is a component used for changing <b>App's primary color</b> and <b>Light/Dark Mode</b> at Runtime.</p>

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

      <br/><br/><br/><br/><br/>

    </NavPageContainer>
    );
  }
}

export default AppThemeDocs