import React from 'react'
import { NavPageContainer, ColorPickerItem, ColorPickerPalette, AppTheme, Button } from '../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReactIcon from './css/home/ReactIcon'
import './css/home.css'


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
            <i className="icons10-windows"></i>
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
            <Button type="primary-outline" value="Github Releases v4.0.8"/>
          </div>
      </div>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container home-code">
        {`$ npx create-react-app MyApp --template windows-ui`}
      </SyntaxHighlighter>

      </div>
   
      {/* <div className="link-container">
        <a href="https://www.npmjs.com/package/react-windows-ui" target="_blank" rel="noreferrer"><NpmIcon /></a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/virtualvivek/react-windows-ui" target="_blank" rel="noreferrer"><GithubIcon /></a>
      </div> */}


      <div className="backdrop-overlay">
        <div style={{opacity: 0.0479153}}></div>
        <div style={{opacity: 0.0699035}}></div>
        <div style={{opacity: 0.0344052}}></div>
        <div style={{opacity: 0.0251223}}></div>
        <div style={{opacity: 0.0726212}}></div>
        <div style={{opacity: 0.0716261}}></div>
        <div style={{opacity: 0.0733299}}></div>
        <div style={{opacity: 0.0574288}}></div>
        <div style={{opacity: 0.0523363}}></div>
        <div style={{opacity: 0.0509536}}></div>
        <div style={{opacity: 0.0567576}}></div>
        <div style={{opacity: 0.0277787}}></div>
        <div style={{opacity: 0.0679573}}></div>
        <div style={{opacity: 0.0430688}}></div>
        <div style={{opacity: 0.0435807}}></div>
        <div style={{opacity: 0.0453715}}></div>
        <div style={{opacity: 0.0527688}}></div>
        <div style={{opacity: 0.0295616}}></div>
        <div style={{opacity: 0.0326275}}></div>
        <div style={{opacity: 0.0429203}}></div>
        <div style={{opacity: 0.0424849}}></div>
        <div style={{opacity: 0.0717016}}></div>
        <div style={{opacity: 0.0563385}}></div>
        <div style={{opacity: 0.0382874}}></div>
        <div style={{opacity: 0.0284212}}></div>
        <div style={{opacity: 0.0547719}}></div>
        <div style={{opacity: 0.0631726}}></div>
        <div style={{opacity: 0.028992}}></div>
        <div style={{opacity: 0.0533963}}></div>
        <div style={{opacity: 0.0480904}}></div>
        <div style={{opacity: 0.0665483}}></div>
        <div style={{opacity: 0.065122}}></div>
        <div style={{opacity: 0.0529938}}></div>
        <div style={{opacity: 0.052363}}></div>
        <div style={{opacity: 0.0354415}}></div>
        <div style={{opacity: 0.0741074}}></div>
        <div style={{opacity: 0.0714523}}></div>
        <div style={{opacity: 0.0583123}}></div>
        <div style={{opacity: 0.0335142}}></div>
        <div style={{opacity: 0.0707661}}></div>
        <div style={{opacity: 0.0466608}}></div>
        <div style={{opacity: 0.0619119}}></div>
        <div style={{opacity: 0.060674}}></div>
        <div style={{opacity: 0.0290214}}></div>
        <div style={{opacity: 0.0525541}}></div>
        <div style={{opacity: 0.051372}}></div>
        <div style={{opacity: 0.0452496}}></div>
        <div style={{opacity: 0.0325436}}></div>
        <div style={{opacity: 0.0289075}}></div>
        <div style={{opacity: 0.057938}}></div>
        <div style={{opacity: 0.0548616}}></div>
        <div style={{opacity: 0.0716295}}></div>
        <div style={{opacity: 0.0596384}}></div>
        <div style={{opacity: 0.0508029}}></div>
        <div style={{opacity: 0.0325501}}></div>
        <div style={{opacity: 0.0413894}}></div>
        <div style={{opacity: 0.0569045}}></div>
        <div style={{opacity: 0.0257851}}></div>
        <div style={{opacity: 0.0646819}}></div>
        <div style={{opacity: 0.0547428}}></div>
        <div style={{opacity: 0.0724335}}></div>
        <div style={{opacity: 0.0635948}}></div>
        <div style={{opacity: 0.0423413}}></div>
        <div style={{opacity: 0.0525528}}></div>
        <div style={{opacity: 0.0594297}}></div>
        <div style={{opacity: 0.0418731}}></div>
        <div style={{opacity: 0.0351051}}></div>
        <div style={{opacity: 0.0696103}}></div>
        <div style={{opacity: 0.0636324}}></div>
        <div style={{opacity: 0.0603203}}></div>
        <div style={{opacity: 0.0250675}}></div>
        <div style={{opacity: 0.0656307}}></div>
        <div style={{opacity: 0.0261537}}></div>
        <div style={{opacity: 0.0610299}}></div>
      </div>

      <div className="backdrop">
        <div className="acrylic-material"></div>
        <div className="backdrop-image"></div>
      </div>

    </NavPageContainer>
    )
  }
}

export default Home