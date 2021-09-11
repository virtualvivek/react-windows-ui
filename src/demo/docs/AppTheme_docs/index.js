import React from 'react'
import { NavPageContainer, Switch, ColorPickerItem, AppTheme,Link } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppThemeImportCode,AppThemeUsageCode,ColorPickerItemImportCode,ColorPickerItemUsageCode } from './codes'
import PropsView from './props-view'
import PropsViewColorPickerItem from './props-view-color-picker-item'
import './window-view.css'

class AppThemeDocs extends React.Component {

  state = {
    app_color: '',
    app_mode: ''
  }

  changeTheme = (color) => {
    this.setState({app_color: color.target.value});
  }

  changeMode = (e) => {
    e.target.checked ?
      this.setState({app_mode: 'light'}) :
      this.setState({app_mode: 'dark'})
  }

  render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>AppTheme</h1>

    <AppTheme color={this.state.app_color} mode={this.state.app_mode}/>

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

    <ColorPickerItem
      defaultChecked
      name="1"
      color="#6632a8"
      onChange={ (color) => this.changeTheme(color)}/>
    <ColorPickerItem
      name="1"
      color="#881798"
      onChange={ (color) => this.changeTheme(color)}/>
    <ColorPickerItem
      name="1"
      color="#744DA9"/>
    <ColorPickerItem
      name="1"
      color="#785AA2"
      onChange={ (color) => this.changeTheme(color)}/>
    <ColorPickerItem
      name="1"
      color="#0063B1"
      onChange={ (color) => this.changeTheme(color)}/>
    <ColorPickerItem
      name="1"
      color="#0078D7"
      onChange={ (color) => this.changeTheme(color)}/>
    <ColorPickerItem
      name="1"
      color="#0078D7"
      onChange={ (color) => this.changeTheme(color)}/>

    <br/><br/><Switch
      defaultChecked={true}
      labelOn="Mode O"
      labelOff="Mode I"
      onChange={(e) => {this.changeMode(e)}}
    />


    <p><span className="color-primary">AppTheme</span> is a component used for changing <b>App's primary color</b> and Mode to either <b>Light or Dark</b> at runtime.</p>

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

    <h1>ColorPickerItem</h1>

    <ColorPickerItem
      defaultChecked
      name="11"
      color="#0078D7"
      onChange={()=> {}}/>
    <ColorPickerItem
      name="11"
      color="#6632a8"
      onChange={()=> {}}/>
    <p><span className="color-primary">ColorPickerItem</span> is a component used to let user choose a value from a number of Color Items.</p>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ColorPickerItemImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ColorPickerItemUsageCode}
    </SyntaxHighlighter>

    <h2>Props</h2>
    <PropsViewColorPickerItem />

    <br/><Link><span style={{fontSize:24}}>View This Page Source <i className="icons10-arrow-right"></i></span></Link>

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default AppThemeDocs