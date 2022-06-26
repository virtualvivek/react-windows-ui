import React from 'react'
import { NavPageContainer, ColorPickerItem, ColorPickerPalette, AppTheme } from '../../lib/src'
import ReactIcon from './css/home/ReactIcon'
import NpmIcon from './css/home/npmIcon'
import GithubIcon from './css/home/githubIcon'
import './css/home.css'


class Home extends React.Component {

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
    <NavPageContainer hasPadding>

      <AppTheme color={this.state.app_color} />

      <div className="home-header">
        <ReactIcon/>
        <span>&nbsp;   +   &nbsp;</span>
        <i className="icons10-windows"></i>
      </div>
      <h1 className="home-text">react-windows-ui</h1>

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

      <br/>
      <span className="home-text">Build windows fluent ui apps on the go!</span>

      <br/>
      <div className="link-container">
        <a href="https://www.npmjs.com/package/react-windows-ui" target="_blank" rel="noreferrer"><NpmIcon /></a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/virtualvivek/react-windows-ui" target="_blank" rel="noreferrer"><GithubIcon /></a>
      </div>

      <div className="home-footer-group">
        <div className="group a"></div>
        <div className="group b"></div>
        <div className="group c"></div>
        <div className="group d"></div>
        <div className="group e"></div>
      </div>
            
    </NavPageContainer>
    )
  }
}

export default Home