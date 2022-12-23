import React from 'react'
import { NavPageContainer, AppTheme, ColorPickerItem } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppThemeImportCode, AppThemeUsageCode, SwitchThemeUsageCode } from './codes'
import PropsView from './props-view'
import Win11Wall from "../../../assets/win11Wall.jpg"
import './css/window-view.css'

class AppThemeDocs extends React.Component {

  state = {
    app_color: "",
    app_color_dark: "",
    app_platform : "windows10"
  }

  changeTheme = (color, colorDark = "#d927f2") => {
    this.setState({
      app_color: color.target.value,
      app_color_dark: colorDark
    });
  }

  componentDidMount = () => {
    let _platform = window.getComputedStyle(document.documentElement).getPropertyValue("--platform");
    _platform.includes("windows11") ? this.setState({ app_platform: "windows11" }) : this.setState({ app_platform: "windows10" });
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

      {this.state.app_platform === "windows10" ?
        <div className="windows-view">
          <div className="start-view">
              <div className="tiles-view-right">
                <div className="white-line"></div>
                <p></p><p></p><p></p><p></p><p></p><p></p>
              </div>
              <div className="tiles-view">
                <div className="white-line"></div>
                <p>Aa</p>
              </div>
          </div>
          <div className="taskbar-view"></div>
        </div>
        :
        <>
        <div className="windows-view11">
          <img src={Win11Wall} alt="win11UI"/>
          <div className="windows-view11_tile">
            <div className="windows-view11_button"></div>
          </div>
        </div>
        <br/>
        </>
      }

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

      <p><span className="color-primary">AppTheme</span> is a component used for changing <b>App's primary color</b> and <b>Light/Dark Mode</b> at Runtime.</p>

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

      <h2>Usage</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {SwitchThemeUsageCode}
      </SyntaxHighlighter>

      <br/><br/><br/><br/><br/><br/>

    </NavPageContainer>
    );
  }
}

export default AppThemeDocs