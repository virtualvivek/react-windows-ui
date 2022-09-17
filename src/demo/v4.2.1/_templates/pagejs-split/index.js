import React from 'react'
import { NavPageContainer } from '../../_lib'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus as dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Page1Code } from './codes'

const PageJsSplit = () => {
  return (
    <NavPageContainer
      hasPadding
      animateTransition>
        <h1>Page.js</h1>
        <p>This file includes <b>Page.js</b> with Distributed area for <span className="color-primary"><b>PageInner</b></span> and <span className="color-primary"><b>PageRight</b></span>.</p>

        <SyntaxHighlighter
            language="javascript"
            showLineNumbers
            style={dracula}
            className="code navigation">
            {Page1Code}
        </SyntaxHighlighter>

    </NavPageContainer>
  )
}

export default PageJsSplit