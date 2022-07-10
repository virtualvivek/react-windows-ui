import React from 'react'
import { NavPageContainer } from '../../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NavBarImportCode,NavBarUsageCode,NavBarExampleUsageCode } from './codes'
import PropsView from './props-view'
import './css/navbar-custom.css'

class NavBarDocs extends React.Component {


render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>NavBar</h1>
  

    <div className="app-navbar-wrap">
    <nav className="animate custom" style={{position:'relative', zIndex: 1}}>
      <div className="app-navbar-header">
        <span className="app-navbar-toggle-button"></span>
        <span className="app-navbar-name">React Windows UI</span>
      </div>
      <ul style={{padding:0}} className="app-navbar-list">
        <li className="app-navbar-list-item">
          <a href="#/navbar"><i className="icons10-home"></i>
          <span>Home</span></a>
        </li>
        <h1>Title</h1>
        <div className="app-hr"></div>
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
      {NavBarImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarUsageCode}
    </SyntaxHighlighter>

    <h2>Example</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarExampleUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>

    <h2>Props</h2>
    <PropsView />
   
    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default NavBarDocs