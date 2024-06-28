import React from 'react'
import { NavPageContainer } from '../../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NavPageContainerImportCode,NavPageContainerUsageCode, NavPageContainerInnerUsageCode } from './codes'
import PropsView from './props-view'
import './css/navpagecontainer-view.css'

class NavPageContainerDocs extends React.Component {

render() {
  return (
  <NavPageContainer
    hasPadding
    scrollTopOnMount={true}
    animateTransition={true}>
    <h1>NavPageContainer</h1>

    <div className="demo-navpagecontainer-view">
      <div className="demo-navpagecontainer-navbar">
        <div className="demo-navpagecontainer-rows-header">
          <div className="demo-navpage-item"></div>
        </div>
      </div>
      <div className="demo-navpagecontainer-page-column">
        <div className="demo-navpagecontainer-page">
          <p>NavPageContainer <span className='color-primary'>hasPadding</span></p>
        </div>
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
  
    <div className="ui-hr"></div>
    <h2>NavPageContainer: hasPadding={`false`}</h2>

    <div className="demo-navpagecontainer-view">
      <div className="demo-navpagecontainer-navbar">
        <div className="demo-navpagecontainer-rows-header">
          <div className="demo-navpage-item"></div>
        </div>
      </div>
      <div className="demo-navpagecontainer-page-column">
        <div className="demo-navpagecontainer-page no-padding">
          <div className="demo-navpagecontainer-page no-padding">
          <p style={{position:"absolute", top: 0, left: 40}}>NavPageContainer</p>
          <p>NavPageContainer.Inner</p>
          </div>
        </div>
      </div>
      <i className="icons10-shutdown"></i>
    </div>
    <br/>
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavPageContainerInnerUsageCode}
    </SyntaxHighlighter>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default NavPageContainerDocs