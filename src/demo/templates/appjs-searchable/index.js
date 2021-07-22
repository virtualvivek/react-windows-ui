import React from 'react'
import { NavPageContainer } from '../../../lib/src'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus as dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppJSDefaultCode as AppJsSearchableCode } from './codes'

const AppJsSearchable = () => {
  return (
    <NavPageContainer
      hasPadding
      animateTransition>
        <h1>App.js</h1>
        <p>This file includes <b>App.js</b> file code with <span className="color-primary"><b>Searchable NavItem</b></span> configuration.</p>

        <SyntaxHighlighter
            language="javascript"
            showLineNumbers
            style={dracula}
            className="code navigation">
            {AppJsSearchableCode}
        </SyntaxHighlighter>
        <br/><br/>

    </NavPageContainer>
  )
}

export default AppJsSearchable