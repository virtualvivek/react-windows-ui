import React from 'react'
import { NavPageContainer, Button } from '../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ForegroundContainerFullCode } from './codes'

class FGCntrDocs extends React.Component {
  render() {
    return (
    <NavPageContainer
      hasPadding
      animateTransition={true}
      backgroundColor={"var(--color-navbar-bg-default)"}>
      <h1>Foreground Usage</h1>

      <div className="app-section-cntr-foreground">
          <Button/>
          <p>You content here.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <h2>Usage</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {ForegroundContainerFullCode}
      </SyntaxHighlighter>

    </NavPageContainer>
    );
  }
}

export default FGCntrDocs