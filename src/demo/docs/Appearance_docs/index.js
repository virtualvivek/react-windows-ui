import React from 'react'
import { NavPageContainer, Gauge } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppearanceImportCode,AppearanceUsageCode } from './codes'
import PropsView from './props-view'

class AppearanceDocs extends React.Component {

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>Appearance</h1>
        
   <p>The <span className="color-primary">Appearance</span> module exposes information about the user's appearance preferences,<br/> such as their preferred color scheme (light or dark).</p>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {AppearanceImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {AppearanceUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default AppearanceDocs