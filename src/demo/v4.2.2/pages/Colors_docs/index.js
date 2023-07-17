import React from 'react'
import { NavPageContainer } from '../../_lib'
import ColorVariables from './ColorVariables'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './colors_docs_styles.css'

class ColorsDocs extends React.Component {

render() {
  return (
  <NavPageContainer hasPadding animateTransition={false}>
    <h1>Colors</h1>

    <p>Use the provided <span className="app-color-primary">Color </span>variables accross your app that adapt changes as per the color scheme to either <b>light</b> or <b>dark</b>.<br/></p>

    <div className="app-table-view-container" style={{display: "list-item", maxHeight: 400, overflowY: "scroll"}}>
      <table className="app-table-view">
        <thead>
          <tr className="app-table-tr">
            <th align="left">CSS Color Name</th>
            <th align="left">Light</th>
            <th align="left">Dark</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr><ColorVariables colorName="--PrimaryColor" colorLight="#0078D7" colorDark="#0078D7"/></tr> */}
          {/* <tr><ColorVariables colorName="--PrimaryColorLight" colorLight="#60CDFF" colorDark="#60CDFF"/></tr> */}
          <tr><ColorVariables colorName="--color-primary-adaptive" colorLight="var(--PrimaryColor)" colorDark="var(--PrimaryColorLight)"/></tr>
          <tr><ColorVariables colorName="--color-scheme-absolute" colorLight="#FFF" colorDark="#000"/></tr>
          <tr><ColorVariables colorName="--color-background-default" colorLight="#FFF" colorDark="#111"/></tr>
          <tr><ColorVariables colorName="--color-button-default" colorLight="#FEFEFEDD" colorDark="#3E3E3EDD"/></tr>
          <tr><ColorVariables colorName="--color-card-bg-default" colorLight="#FBFBFBDD" colorDark="#272727DD"/></tr>
          <tr><ColorVariables colorName="--color-day-primary-night-grey" colorLight="var(--PrimaryColor)" colorDark="#403E41"/></tr>
          <tr><ColorVariables colorName="--color-day-primary-night-white" colorLight="var(--PrimaryColor)" colorDark="#FFF"/></tr>
          <tr><ColorVariables colorName="--color-dropdown-menu-bg" colorLight="#F8F8F8" colorDark="#1A1A1A"/></tr>
          <tr><ColorVariables colorName="--color-foreground-default" colorLight="#FFF" colorDark="#2B2B2B"/></tr>
          <tr><ColorVariables colorName="--color-foreground-dark" colorLight="#EEEEEE" colorDark="#444444"/></tr>
          <tr><ColorVariables colorName="--color-input-bg-default" colorLight="#FFFFFF99" colorDark="#11111199"/></tr>
          <tr><ColorVariables colorName="--color-input-border-default" colorLight="#55555544" colorDark="#77777744"/></tr>
          <tr><ColorVariables colorName="--color-input-border-strong" colorLight="#8A8A8A" colorDark="#9A9A9A"/></tr>
          <tr><ColorVariables colorName="--color-ui-active-default" colorLight="#D8D8D8" colorDark="#262626"/></tr>
          <tr><ColorVariables colorName="--color-navbar-bg-default" colorLight="#F3F3F3" colorDark="#202020"/></tr>
          <tr><ColorVariables colorName="--color-progress-bg" colorLight="#E2E2E2" colorDark="#484848"/></tr>
          <tr><ColorVariables colorName="--color-scroll-thumb" colorLight="#777777DD" colorDark="#EEEEEE99"/></tr>
          <tr><ColorVariables colorName="--color-scroll-thumb-active" colorLight="#77777799" colorDark="#DDDDDD77"/></tr>
          <tr><ColorVariables colorName="--color-scroll-thumb-hover" colorLight="#777777EE" colorDark="#DDDDDD99"/></tr>
          <tr><ColorVariables colorName="--color-slider-thumb-bg" colorLight="#FFF" colorDark="#454545"/></tr>
          <tr><ColorVariables colorName="--color-text-default" colorLight="#000" colorDark="#FFF"/></tr>
          <tr><ColorVariables colorName="--color-ui-border-default" colorLight="#E3E3E399" colorDark="#32323299"/></tr>
          <tr><ColorVariables colorName="--color-ui-hover-default" colorLight="#EEEEEED1" colorDark="#44444477"/></tr>
          <tr><ColorVariables colorName="--color-ui-hover-strong" colorLight="#E1E0E088" colorDark="#37373788"/></tr>
        </tbody>
      </table>
    </div>

    <h1>Create your own color variables.</h1>
    <p>Define your own <span className="app-color-primary">color variables </span>at anywhere like below:</p>
    
    <SyntaxHighlighter
      language="css"
      style={vscDarkPlus}
      className="code code-container">
      {
`body {
  --your-color-variable: #0078D7;
}
body.dark-theme {
  --your-color-variable: #47aeff;
}`
      }
    </SyntaxHighlighter>


    <h1>Define a component style as per theme.</h1>
    
    <SyntaxHighlighter
      language="css"
      style={vscDarkPlus}
      className="code code-container">
      {
`.my-component {
  background-color: #ffffff;
}
body.dark-theme .my-component {
  background-color: #000000;
}`
      }
    </SyntaxHighlighter>

    <br/><br/><br/><br/>

  </NavPageContainer>
  );
 }
}

export default ColorsDocs