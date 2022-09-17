import React from 'react'
import { NavPageContainer, Gauge } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NavPageContainerImportCode,NavPageContainerUsageCode } from './codes'
import PropsView from './props-view'

class GaugeDocs extends React.Component {

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>NavPageContainer</h1>
        
    <Gauge
      setProgress={this.state.gaugeValue}
      scale={2}
      value={this.state.gaugeValue+"%"}
      info="of something"
    />

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
    <h2>Gauge <p className="app-code">Custom color</p> :</h2>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default GaugeDocs