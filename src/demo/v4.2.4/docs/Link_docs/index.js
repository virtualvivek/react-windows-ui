import React from 'react'
import { NavPageContainer } from '../../_lib'
import { Link } from 'react-router-dom'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { LinkImportCode, LinkUsageCode, LinkSubtleUsageCode } from './codes'

const LinkDocs = () => {
  return (
    <NavPageContainer hasPadding>
      <h1>Link</h1>

      <p><span className="ui-color-primary">Links</span> are accessible elements used primarily for navigation.<br/>Style any component either from a <i>routing library</i> or an <i>{`<a>`}</i> with <b>className="ui-link"</b>.</p>
      <div className="ui-hr"></div>

      <div className="ui-alert-bar alert-secondary" role="alert">
        <div className="ui-alert-bar-content">
          <span>This project uses <i>"react-router-dom"</i> but you can use any routing library.</span>
        </div>
      </div>

      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {LinkImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <Link className="ui-link" to="#">This is a Link</Link><br/>
      <Link className="ui-link" to="#"><b>This is a Bold Link</b></Link><br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {LinkUsageCode}
      </SyntaxHighlighter>

      <h2>Link as <span className="ui-code">Subtle</span>:</h2>
      <Link className="ui-link-subtle" to="#">This is a Subtle Link</Link><br/><br/>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {LinkSubtleUsageCode}
      </SyntaxHighlighter>

      <div className="ui-hr"></div>

      <br/><br/><br/><br/><br/>
    </NavPageContainer>
  );
}

export default LinkDocs