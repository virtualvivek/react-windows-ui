import React from 'react'
import { NavPageContainer } from '../../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NavPageContainerImportCode,NavPageContainerUsageCode } from './codes'
import PropsView from './props-view'
import './css/navpagecontainer-view.css'

class SplashScreenDocs extends React.Component {

render() {
  return (
  <NavPageContainer
    hasPadding
    scrollTopOnMount={true}
    animateTransition={true}>
    <h1>SplashScreen</h1>

    <div className="demo-splash-navpagecontainer-view">
      <div className="demo-splash-navpagecontainer-page-column">
        <p className="demo-splash-navpagecontainer-toolbar">➖ ⬜ ❌</p>
        <div className="demo-splash-navpagecontainer-page">
          <p>SplashScreen</p>
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

export default SplashScreenDocs