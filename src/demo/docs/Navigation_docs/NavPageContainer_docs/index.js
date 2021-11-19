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

    <div className="navpagecontainer-view">
      <div className="navpagecontainer-nav">
        <div className="navpagecontainer-rows navpage-header">
          <div className="navpage-item"></div>
          <div className="navpage-switch"><p></p></div>
        </div>
        <div className="navpagecontainer-rows navpage-serachbar"></div>
        <div className="navpagecontainer-rows"></div>
        <div className="navpagecontainer-rows"></div>
        <div className="navpagecontainer-rows"></div>
        <div className="navpagecontainer-rows"></div>
      </div>
      <div className="navpagecontainer-container">
        <p className="toolbar">- o x</p>
        <p>NavPageContainer</p>
        <div className="navpagecontainer-rows"></div>
        <div className="navpagecontainer-rows half"></div>
        <div className="navpagecontainer-rows half"></div>
      </div>
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