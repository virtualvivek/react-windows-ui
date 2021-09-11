import React from 'react'
import { Link } from 'react-router-dom'
import { NavPageContainer, ColorPickerItem, Button } from '../../lib/src'
import ReactIcon from './css/home/ReactIcon'
import NpmIcon from './css/home/npmIcon'
import GithubIcon from './css/home/githubIcon'
import './css/home.css'


class Home extends React.Component {


  constructor() {
    super();
    this.state = {
      stylesheet: 'win10'
    }
  }

  // componentDidMount() {
  //   if(this.state.stylesheet === 'win10') {
  //     require('../../../lib/dist/react-windows-ui.min.css');
  //  } else if(this.state.stylesheet === 'win11') {
  //     require('../../../lib/dist/react-windows-ui-sunvalley.min.css');
  //  }
  // }

  // componentDidUpdate() {
  //   if(this.state.stylesheet === 'win10') {
  //     delete [require.resolve('../../../lib/dist/react-windows-ui-sunvalley.min.css')]
  //     require('../../../lib/dist/react-windows-ui.min.css')
  //  } else {
  //     require('../../../lib/dist/react-windows-ui-sunvalley.min.css')
  //  }
  // }

  ChangeTheme10 = () => {
    this.setState({
      stylesheet:'win10'
    })
    console.log(this.state.stylesheet)
  }
  ChangeTheme11 = () => {
    this.setState({
      stylesheet:'win11'
    })
    console.log(this.state.stylesheet)
  }

  
  render() {
  return (
    <NavPageContainer hasPadding>

      <div className="home-header">
        <ReactIcon/>
        <span>&nbsp;   +   &nbsp;</span>
        <i className="icons10-windows"></i>
      </div>
      <h1 className="home-text">react-windows-ui</h1>

      <div className="home-color-picker">
        <ColorPickerItem
          name="1"
          color="#0078D7"
          checked/>
        <ColorPickerItem
          name="1"
          color="#00B294"/>
        <ColorPickerItem
          name="1"
          color="#F7630C"/>
        <ColorPickerItem
          name="1"
          color="#D13438"/>
        <ColorPickerItem
          name="1"
          color="#4A5459"/>
        <ColorPickerItem
          name="1"
          color="#018574"/>

        {/* <br/><br/>

        <ColorPickerItem
          checked
          height={100}
          width={100}
          name="2"
          onChange={this.ChangeTheme10}
          image={Img10} />

        <ColorPickerItem
          height={100}
          width={100}
          name="2"
          onChange={this.ChangeTheme11}
          image={Img11} /> */}


      </div>

      <br/><span className="home-text">Build windows fluent ui apps on the go!</span>

      <div className="link-container">
        <Link to="/getting_started">
          <Button
            type="primary"
            value="Getting Started"
          />
        </Link>
        &nbsp;&nbsp;
        <Link to="/inputs">
          <Button
            type="primary-outline"
            value="Components"
          />
        </Link>

      </div>
      

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