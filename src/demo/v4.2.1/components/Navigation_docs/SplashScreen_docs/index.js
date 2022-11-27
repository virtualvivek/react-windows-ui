import React from 'react'
import { NavPageContainer } from '../../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { SplashScreenImportCode, SplashScreenUsageCode, SplashScreenLogoUsageCode,
        SplashScreenTitleSubtitleUsageCode, SplashScreenLogoTitleUsageCode, SplashScreenPublicCode } from './codes'
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
      {SplashScreenImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SplashScreenUsageCode}
    </SyntaxHighlighter>
    <div className="app-hr"></div>

    <h4><b>Edit ./public/index.html</b></h4>
    <p>Below code helps to display some content before page mounts.</p>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SplashScreenPublicCode}
    </SyntaxHighlighter>
    <div className="app-hr"></div>

    <h2>SplashScreen with a <span className='app-code'>Logo</span></h2>

    <div className="demo-splash-navpagecontainer-view">
      <div className="demo-splash-navpagecontainer-page-column">
        <p className="demo-splash-navpagecontainer-toolbar">➖ ⬜ ❌</p>
        <div className="demo-splash-navpagecontainer-page">
          <p><i className="icons10-terminal" style={{fontSize: 28}}></i></p>
        </div>
      </div>
      <i className="icons10-shutdown"></i>
    </div>
    <br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SplashScreenLogoUsageCode}
    </SyntaxHighlighter>
    <div className="app-hr"></div>

    <h2>SplashScreen with a <span className='app-code'>Title & Subtitle</span></h2>

    <div className="demo-splash-navpagecontainer-view">
      <div className="demo-splash-navpagecontainer-page-column">
        <p className="demo-splash-navpagecontainer-toolbar">➖ ⬜ ❌</p>
        <div className="demo-splash-navpagecontainer-page">
          <p>Title<br/><span style={{fontWeight: 400, fontSize: 14}}>Subtitle</span></p>
        </div>
      </div>
      <i className="icons10-shutdown"></i>
    </div>
    <br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SplashScreenTitleSubtitleUsageCode}
    </SyntaxHighlighter>
    <div className="app-hr"></div>

    <h2>SplashScreen with a <span className='app-code'>Logo & Title</span></h2>

    <div className="demo-splash-navpagecontainer-view">
      <div className="demo-splash-navpagecontainer-page-column">
        <p className="demo-splash-navpagecontainer-toolbar">➖ ⬜ ❌</p>
        <div className="demo-splash-navpagecontainer-page">
          <p><i className="icons10-terminal" style={{fontSize: 28}}></i><br/>Title</p>
        </div>
      </div>
      <i className="icons10-shutdown"></i>
    </div>
    <br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SplashScreenLogoTitleUsageCode}
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