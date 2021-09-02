import React from 'react'
import { NavPageContainer, Gauge } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NavBarImportCode,NavBarUsageCode } from './codes'
import PropsView from './props-view'

class NavBarDocs extends React.Component {


render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>Gauge</h1>
        
    <Gauge
      info="of something"
    />

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

  
    <div className="app-hr"></div>
    <h2>Gauge <p className="app-code">Custom color</p> :</h2>


    <Gauge
      info="of total"
      strokeColor="#e01944"
      valueColor="#e01944"
    />

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
     {NavBarUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>
    <h2>Gauge <p className="app-code">Type Fill</p> :</h2>

    <Gauge
      scale={1.2}
      strokeColor="#eb8613"
      valueColor="#eb8613"
      type="fill"
    />

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarUsageCode}
    </SyntaxHighlighter>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default NavBarDocs