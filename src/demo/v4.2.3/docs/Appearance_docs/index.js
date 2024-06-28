import React from 'react'
import { NavPageContainer } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppearanceImportCode,AppearanceUsageCode,
  AppearanceGetColorSchemeCode,AppearanceSetDarkSchemeCode,AppearanceSetLightSchemeCode, AppearanceSetSystemSchemeCode } from './codes'

class AppearanceDocs extends React.Component {

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>Appearance</h1>
        
   <p>The <span className="ui-color-primary">Appearance</span> module exposes information about the user's appearance preferences,<br/> such as their preferred color scheme (light or dark).</p>

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

  
    <div className="ui-hr"></div>

    <h2><b>Methods</b></h2>

    <h2><p className="ui-code">getColorScheme()</p></h2>
    <p>Indicates the current either system or user preferred color scheme.</p>
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {AppearanceGetColorSchemeCode}
    </SyntaxHighlighter>


    <div className="ui-hr"></div>
    <h2><p className="ui-code">setDarkScheme()</p></h2>
    <p>Set's app to <i>dark</i> color scheme.</p>
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {AppearanceSetDarkSchemeCode}
    </SyntaxHighlighter>


    <div className="ui-hr"></div>
    <h2><p className="ui-code">setLightScheme()</p></h2>
    <p>Set's app to <i>light</i> color scheme.</p>
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {AppearanceSetLightSchemeCode}
    </SyntaxHighlighter>


    <div className="ui-hr"></div>
    <h2><p className="ui-code">setSystemScheme()</p></h2>
    <p>Set's app to <i>system</i> color scheme.</p>
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {AppearanceSetSystemSchemeCode}
    </SyntaxHighlighter>


    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default AppearanceDocs