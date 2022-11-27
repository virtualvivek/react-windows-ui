import React from 'react'
import { NavPageContainer,NavBarSubMenu } from '../../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NavBarSubMenuImportCode,NavBarSubMenuUsageCode } from './codes'
import PropsView from './props-view'

class NavBarSubMenuDocs extends React.Component {

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>NavBarSubMenu</h1>

    <div style={{width:290,backgroundColor:'var(--color-navbar-bg-default)'}}>
    <NavBarSubMenu title="Title">
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
    </NavBarSubMenu>
    </div>


    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarSubMenuImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarSubMenuUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>

    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default NavBarSubMenuDocs