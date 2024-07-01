import React from 'react'
import { NavPageContainer, ColorPickerItem, ColorPickerPalette } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ColorPickerItemImportCode, ColorPickerItemUsageCode, ColorPickerPaletteImportCode, ColorPickerPaletteUsageCode } from './codes'
import PropsViewColorPickerItem from './props-view-color-picker-item'
import PropsViewColorPickerPalette from './props-view-color-picker-palette'

class ColorPickerDocs extends React.Component {

  state = {
    app_color: "#6632a8",
  }

  changeColor = (color) => {
    this.setState({ app_color: color.target.value });
  }

  render() {
    return (
    <NavPageContainer
      hasPadding
      animateTransition={false}>
      <h1 style={{color: this.state.app_color}}>ColorPicker</h1>

      <div style={{display:"flex", gap: 5}}>
        <ColorPickerItem
          defaultChecked
          name="1"
          color="#6632a8"
          onChange={ (color) => this.changeColor(color)}/>
        <ColorPickerItem
          name="1"
          color="#881798"
          onChange={ (color) => this.changeColor(color)}/>
        <ColorPickerItem
          name="1"
          color="#038387"
          onChange={ (color) => this.changeColor(color)}/>
        <ColorPickerItem
          name="1"
          color="#00B294"
          onChange={ (color) => this.changeColor(color)}/>
        <ColorPickerItem
          name="1"
          color="#69797E"
          onChange={ (color) => this.changeColor(color)}/>
        <ColorPickerPalette
          color="#0078D7"
          onChange={ (color) => this.changeColor(color)}/>
      </div>
      
      <p><span className="ui-color-primary">ColorPickerItem</span> is a component used to let user choose a value from a number of Color Items.</p>

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

      <p><span className="ui-color-primary">ColorPickerPalette</span> is a component used to let user choose a color from Color Palette.</p>

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