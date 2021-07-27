import React from 'react'
import { NavPageContainer,Link } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import PropsView from './props-view'
import { LinkImportCode,LinkUsageCode,LinkInlineUsageCode } from './codes'

const LinkDocs = () => {
  return (
    <NavPageContainer hasPadding>
      <h1>Link</h1>

      <p><span className="color-primary">Links</span> are accessible elements used primarily for navigation.<br/>This component is styled to resemble a hyperlink and semantically renders an {'<a>'}.</p>
      <div className="app-hr"></div>
      <Link to="#">This is Default Link</Link>
      <br/><br/>
      <Link to="#"><b>This is Default Bold Link</b></Link>

      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {LinkImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <Link to="#">This is a Link</Link><br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {LinkUsageCode}
      </SyntaxHighlighter>

      <div className="app-hr"></div>

      <h2>Link <p className="app-code">Inline</p> :</h2>

      <p>
        Lorem ipsum dolor sit <Link to="#">This is a Link</Link> adipiscing elit
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {LinkInlineUsageCode}
      </SyntaxHighlighter>


      <h2>Props</h2>
      <PropsView />

    <br/><br/><br/><br/><br/>
    </NavPageContainer>
  );
}

export default LinkDocs