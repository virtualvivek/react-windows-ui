import React from 'react'
import { NavPageContainer, ColorPickerItem, ColorPickerPalette, AppTheme, Button } from '../_lib'
import { HomeBackdrop } from '../../common/components'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReactIcon from '../../assets/static/ReactIcon'
import WinIcon from '../../assets/static/WinIcon'
import './css/home.css'
import { lib_version } from '../values'

class Home extends React.Component {
  state = {
    app_color: '', app_mode: ''
  }

  changeTheme = (color) => { this.setState({app_color: color.target.value}); }
  
  render() {
  return (
    <NavPageContainer>
      <AppTheme color={this.state.app_color} />

      <div className="root-flex-container-home">
        
      <div className="root-flex-subcontainer-home">
        
        <div style={{display:"flex",flexDirection:"column"}}>
          <div className="home-header">
            <ReactIcon/>
            <span>&nbsp;   +   &nbsp;</span>
            <WinIcon/>
          </div>

          <div className="home-color-picker">
            <ColorPickerItem
              defaultChecked
              name="1"
              color="#0078D7"
              onChange={ (color) => this.changeTheme(color)}/>
            <ColorPickerItem
              name="1"
              color="#6632a8"
              onChange={ (color) => this.changeTheme(color)}/>
            <ColorPickerItem
              name="1"
              color="#881798"
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
              name="1"
              color="#5ebd06"
              onChange={ (color) => this.changeTheme(color)}/>
          </div>
          </div>
          <div style={{display: "flex",flexDirection: "column",paddingLeft: "5%", justifyContent: "flex-start"}}>
            <h1 className="home-title">react-windows-ui</h1>
            <span style={{maxWidth: 340, marginBottom: 24}}>Build Windows fluent UI apps using ReactJS. Provides a set of accessible, reusable, and composable React components.</span>
            <Button type="primary-outline" value={`Github Releases v${lib_version}`}/>
          </div>
      </div>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container home-code">
        {`$ npx create-react-app MyApp --template windows-ui`}
      </SyntaxHighlighter>

      </div>
      <HomeBackdrop/>
      <div className="backdrop">
        <div className="acrylic-material"></div>
        <div className="backdrop-image"></div>
      </div>

    </NavPageContainer>
    )
  }
}

export default Home