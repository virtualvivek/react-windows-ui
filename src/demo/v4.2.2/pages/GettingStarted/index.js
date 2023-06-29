import React from 'react'
import { NavPageContainer} from '../../_lib'
// import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import { AppConfigCSSDefault } from './codes/gettingStarted'
import './css/desktop.css'
import Img1 from '../../../assets/illustration/mountain.jpg'

const GettingStarted = () => {

  return (
    <NavPageContainer
      hasPadding
      animateTransition>

        <h1>App.js</h1>

      <div className="template-container">
        <div className="template-desktop">
          <div className="template-navbar">
            <div className="temp-navitem temp-header">
              <span className="temp-toggler">≡</span><span>App.js</span>
            </div>
            <div className="temp-navitem temp-navsearch">
              <span>Search</span>
            </div>
            <div className="temp-navitem temp-navlink">
              <i className="icons10-sun"></i><span>Light Mode</span>
            </div>
            <div className="temp-navitem temp-navlink">
              <span>SubMenu</span><i className="icons10-angle-down"></i>
            </div>
            <span className="temp-title">Title</span>
            <div className="temp-navitem temp-navlink temp-navitem-active">
              <i className="icons10-puzzle"></i><span>Page 1</span>
            </div>
            <div className="temp-navitem temp-navlink">
              <img src={Img1} alt="img" className="temp-navimg" /><span>Page 2</span>
            </div>
          </div>
          <div className="template-page-container">
          </div>
        </div>
        
        <div className="temp-divider"></div>
        <div>
          <h1>App.js</h1>
        </div>
      </div>

    <br/><br/>
    </NavPageContainer>
  )
}

export default GettingStarted