import React from 'react'
import { NavPageContainer } from '../../_lib'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus as dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppJSDefaultCode } from './codes'

const AppJsDefault = () => {
  return (
    <NavPageContainer
      hasPadding
      animateTransition>
        <h1>App.js</h1>
        <p>This file includes <b>App.js</b> file code with default configuration.</p>

        <SyntaxHighlighter
            language="javascript"
            showLineNumbers
            style={dracula}
            className="code navigation">
            {AppJSDefaultCode}
        </SyntaxHighlighter>

    </NavPageContainer>
  )
}

export default AppJsDefault