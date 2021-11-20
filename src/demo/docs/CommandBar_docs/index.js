import React from 'react'
import { NavPageContainer,CommandBar,Button } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NavBarImportCode,NavBarUsageCode } from './codes'
import PropsView from './props-view'

class CommandBarDocs extends React.Component {


render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>CommandBar</h1>

    <CommandBar
      >
      <Button
        icon={<i className="icons10-share color-primary"></i>}
        value="Share"/>
      <Button
        icon={<i className="icons10-pencil color-primary"></i>}
        value="Edit"/>
      <Button
        icon={<i className="icons10-trash color-primary"></i>}
        value="Delete"/>
      <Button
        icon={<i className="icons10-save color-primary"></i>}
        value="Save"/>
      <Button
        icon={<i className="icons10-more"></i>}
        value=""
        onClick={this.toggleDialog}/>
    </CommandBar>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarUsageCode}
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

export default CommandBarDocs