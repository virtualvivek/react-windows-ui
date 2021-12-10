import React from 'react'
import { NavPageContainer } from '../../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NavPageContainerImportCode,NavPageContainerUsageCode } from './codes'
import PropsView from './props-view'
import './css/navpagecontainer-view.css'

class NavPageContainerDocs extends React.Component {

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>NavPageContainer</h1>

    <div className="demo-navpagecontainer-view">
      <div className="demo-navpagecontainer-navbar">
        <div className="demo-navpagecontainer-rows-header">
          <div className="demo-navpage-item"></div>
        </div>
      </div>
      <div className="demo-navpagecontainer-page-column">
        <p className="demo-navpagecontainer-toolbar">➖ ⬜ ❌</p>
        <div className="demo-navpagecontainer-page">
          <p>NavPageContainer</p>
        </div>
      </div>
      <i className="icons10-shutdown"></i>
    </div>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavPageContainerImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavPageContainerUsageCode}
    </SyntaxHighlighter>
  
    <div className="app-hr"></div>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default NavPageContainerDocs