import React from 'react'
import { NavPageContainer, Switch } from '../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './colors_docs_styles.css'

class ColorsDocs extends React.Component {

  constructor(props) {
    super(props);
    let PrimaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--PrimaryColor');
    let PrimaryColorLight = window.getComputedStyle(document.documentElement).getPropertyValue('--PrimaryColorLight');
    let alphaColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color_primary_alpha');

    this.state = {
      primaryColor_val: PrimaryColor,
      primaryColorLight_val: PrimaryColorLight,

      color_scheme_val: 'light',
      color_bg_light_val: '#FFFFFF',
      color_text_dark_val :'#222222',
      color_nav_val: '#EEEEEE',
      color_grey_light_val: '#EEEEEE',
      color_grey_light_alpha_val: '#EEEEEED1',
      color_link_bg_hover_val: '#D8D8D8',
      color_link_bg_active_val: '#B8B8B8',
      color_button_val: '#d9d9d9',
      color_button_hover_val: '#666666',
      color_primary_light_val : PrimaryColor,
      color_primary_dark_val: PrimaryColor,
      color_primary_alpha_val: alphaColor,
    }
  }


  changeMode = (e) => {
    let PrimaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--PrimaryColor');
    e.target.checked ?
      this.setState({
        color_scheme_val: 'dark',
        color_bg_light_val: '#111111',
        color_text_dark_val :'#FFFFFF',
        color_nav_val: '#403E41',
        color_grey_light_val: '#444444',
        color_grey_light_alpha_val: '#444444D1',
        color_link_bg_hover_val: '#555555',
        color_link_bg_active_val: '#222222',
        color_button_val: '#555555',
        color_button_hover_val: '#999999',
        color_primary_light_val : '#FFFFFF',
        color_primary_dark_val: '#403E41'
      })
      :
      this.setState({
        color_scheme_val: 'light',
        color_bg_light_val: '#FFFFFF',
        color_text_dark_val :'#222222',
        color_nav_val: '#EEEEEE',
        color_grey_light_val: '#EEEEEE',
        color_grey_light_alpha_val: '#EEEEEED1',
        color_link_bg_hover_val: '#D8D8D8',
        color_link_bg_active_val: '#B8B8B8',
        color_button_val: '#d9d9d9',
        color_button_hover_val: '#666666',
        color_primary_light_val : PrimaryColor,
        color_primary_dark_val: PrimaryColor
      })
  }

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>Colors</h1>

    <p>Use the provided <span className="color-primary">Color </span>variables accross your app that adapt changes as per the color scheme to either <b>light</b> or <b>dark</b>.<br/></p>
        
   
    <h2><Switch labelOn="Dark" labelOff="Light" onChange={(e) => {this.changeMode(e)}}/></h2>
    

    <div className="demo-colors-container">

    <div className="app-hr m-0"></div>
    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--PrimaryColor<span className="user-select-none">:</span></span>
      <span className="demo-colors-box background-color-primary"></span>
      <span className="demo-colors-value">{this.state.primaryColor_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--PrimaryColorLight<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor: this.state.primaryColorLight_val}}></span>
      <span className="demo-colors-value">{this.state.primaryColorLight_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <p>Color values when app scheme is <b>{this.state.color_scheme_val}</b></p>

    
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_scheme<span className="user-select-none"><span className="user-select-none">:</span></span></span>
      <span className="demo-colors-box background-color-nav"></span>
      <span className="demo-colors-value">{this.state.color_scheme_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_background_default<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor: this.state.color_bg_light_val}}></span>
      <span className="demo-colors-value">{this.state.color_bg_light_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_text_dark<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor: this.state.color_text_dark_val}}></span>
      <span className="demo-colors-value">{this.state.color_text_dark_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_nav<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor: this.state.color_nav_val}}></span>
      <span className="demo-colors-value">{this.state.color_nav_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_grey_light<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor: this.state.color_grey_light_val}}></span>
      <span className="demo-colors-value">{this.state.color_grey_light_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_grey_light_alpha<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor: this.state.color_grey_light_alpha_val}}></span>
      <span className="demo-colors-value">{this.state.color_grey_light_alpha_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_link_bg_hover<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor: this.state.color_link_bg_hover_val}}></span>
      <span className="demo-colors-value">{this.state.color_link_bg_hover_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_link_bg_active<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor: this.state.color_link_bg_active_val}}></span>
      <span className="demo-colors-value">{this.state.color_link_bg_active_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_button_default<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor: this.state.color_button_val}}></span>
      <span className="demo-colors-value">{this.state.color_button_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_button_hover<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor: this.state.color_button_hover_val}}></span>
      <span className="demo-colors-value">{this.state.color_button_hover_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_primary_light<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor: this.state.color_primary_light_val}}></span>
      <span className="demo-colors-value">{this.state.color_primary_light_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_primary_dark<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor: this.state.color_primary_dark_val}}></span>
      <span className="demo-colors-value">{this.state.color_primary_dark_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    <div className="app-flex app-align-center font-size-16px">
      <span className="demo-colors-name">--color_primary_alpha<span className="user-select-none">:</span></span>
      <span className="demo-colors-box" style={{backgroundColor:'var(--color_primary_alpha)'}}></span>
      <span className="demo-colors-value">{this.state.color_primary_alpha_val}</span>
    </div>
    <div className="app-hr m-0"></div>

    </div>

    <h1>Create your own color variables.</h1>
    <p>Define your own <span className="color-primary">color variables </span>at anywhere like below:</p>
    
    <SyntaxHighlighter
      language="css"
      style={vscDarkPlus}
      className="code code-container">
      {
`body {
  --your-color-variable: #0078D7;
}
body.dark-theme {
  --your-color-variable: #47aeff;
}`
      }
    </SyntaxHighlighter>

    <h1>Define a component style as per theme.</h1>
    
    <SyntaxHighlighter
      language="css"
      style={vscDarkPlus}
      className="code code-container">
      {
`.my-component {
  background-color: #ffffff;
}
body.dark-theme .my-component {
  background-color: #000000;
}`
      }
    </SyntaxHighlighter>

    <br/><br/><br/><br/>

  </NavPageContainer>
  );
 }
}

export default ColorsDocs