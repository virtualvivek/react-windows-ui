import React from 'react'
import { NavPageContainer } from '../../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NavBarLinkImportCode,NavBarLinkUsageCode,
         NavBarLinkImgUsageCode,NavBarLinkBadgeUsageCode } from './codes'
import PropsView from './props-view'
import Img1 from '../../../assets/illustration/macos.jpg'
import Img2 from '../../../assets/illustration/2.jpg'

class NavBarLinkDocs extends React.Component {


render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>

    <h1>NavBarLink</h1>

    <div className="app-navbar-wrap">
    <nav className="animate custom" style={{position:'relative'}}>
      <ul style={{padding:0,margin:0}} className="app-navbar-list">
        <li className="app-navbar-list-item">
          <a href="#/navbar" aria-current="page" className="active">
            <i className="icons10-add"></i>
            <span>NavItem1</span>
          </a>
        </li>
        <li className="app-navbar-list-item">
          <a href="#/navbar">
            <i className="icons10-user"></i>
            <span>NavItem2</span>
          </a>
        </li>
      </ul>
    </nav>
    </div>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarLinkImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarLinkUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>

    <h2>NavBarLink <span className="app-code">with img</span> :</h2>
    <p>NavBar <b>img</b> and <b>icon</b> is only visible on <b>small devices</b> when prop : <span className="app-code"><b>{`mobileHasIcons={true}`}</b></span></p>

    <div className="app-navbar-wrap">
    <nav className="animate custom" style={{position:'relative'}}>
      <ul style={{padding:0,margin:0}} className="app-navbar-list">
        <li className="app-navbar-list-item">
        <a href="#/navbar">
          <img src={Img1} alt="img"/>
          <span>NavItem 1</span>
        </a>
        </li>
        <li className="app-navbar-list-item">
          <a href="#/navbar">
            <img src={Img2} alt="img"/>
            <span>NavItem 2</span>
          </a>
        </li>
      </ul>
    </nav>
    </div>
    <br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarLinkImgUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>

    <h2>NavBarLink <span className="app-code">show Badge</span> :</h2>

    <div className="app-navbar-wrap">
    <nav className="animate custom" style={{position:'relative'}}>
      <ul style={{padding:0,margin:0}} className="app-navbar-list">
        <li className="app-navbar-list-item">
        <a href="#/navbar">
          <i className="icons10-user"></i>
          <span>NavItem1</span>
          <div className="app-badge">12</div>
        </a>
        </li>
        <li className="app-navbar-list-item">
          <a href="#/navbar">
            <img src={Img2} alt="img"/>
            <span>NavItem2</span>
            <div className="app-badge">7</div>
          </a>
        </li>
      </ul>
    </nav>
    </div>
    <br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarLinkBadgeUsageCode}
    </SyntaxHighlighter>

    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default NavBarLinkDocs