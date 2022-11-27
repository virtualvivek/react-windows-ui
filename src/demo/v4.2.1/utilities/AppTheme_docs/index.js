import React from 'react'
import { NavPageContainer } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppThemeImportCode, AppThemeUsageCode, SwitchThemeUsageCode } from './codes'
import PropsView from './props-view'

class AppThemeDocs extends React.Component {
  render() {
    return (
    <NavPageContainer
      hasPadding
      animateTransition={false}>

      <h1>AppTheme</h1>

      <p><span className="color-primary">AppTheme</span> is a component used for changing <b>App's primary color</b> and Mode to either <b>Light or Dark</b> at Runtime.</p>

      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AppThemeImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AppThemeUsageCode}
      </SyntaxHighlighter>

      <h2>Props</h2>
      <PropsView />

      <h2>Usage</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {SwitchThemeUsageCode}
      </SyntaxHighlighter>

      <br/><br/><br/><br/><br/><br/>

    </NavPageContainer>
    );
  }
}

export default AppThemeDocs