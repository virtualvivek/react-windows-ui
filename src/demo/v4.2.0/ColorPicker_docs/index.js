import React from 'react'
import { NavPageContainer, AppTheme, ColorPickerItem, ColorPickerPalette } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ColorPickerItemImportCode, ColorPickerItemUsageCode, ColorPickerPaletteImportCode, ColorPickerPaletteUsageCode } from './codes'
import PropsViewColorPickerItem from './props-view-color-picker-item'
import PropsViewColorPickerPalette from './props-view-color-picker-palette'
import './css/window-view.css'

class ColorPickerDocs extends React.Component {

  state = {
    app_color: '',
    app_get_theme :''
  }

  changeTheme = (color) => {
    this.setState({app_color: color.target.value});
  }


render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>ColorPicker</h1>

    <AppTheme
      color={this.state.app_color}
      colorDarkMode={this.state.app_color}
    />
        
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
      color="#038387"
      onChange={ (color) => this.changeTheme(color)}/>
    <ColorPickerItem
      name="1"
      color="#00B294"
      onChange={ (color) => this.changeTheme(color)}/>
    <ColorPickerItem
      name="1"
      color="#69797E"
      onChange={ (color) => this.changeTheme(color)}/>
    <ColorPickerPalette
      color="#0078D7"
      onChange={ (color) => this.changeTheme(color)}/>

    <br/>
    <p><span className="color-primary">ColorPickerItem</span> is a component used to let user choose a value from a number of Color Items.</p>

    <h2>ColorPickerItem</h2>

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

  
    <h1>ColorPickerPalette</h1>

    <ColorPickerPalette
      color="#0078D7"
      onChange={()=> {}}/>

    <p><span className="color-primary">ColorPickerPalette</span> is a component used to let user choose a color from Color Palette.</p>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ColorPickerPaletteImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ColorPickerPaletteUsageCode}
    </SyntaxHighlighter>

    <h2>Props</h2>
    <PropsViewColorPickerPalette />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default ColorPickerDocs