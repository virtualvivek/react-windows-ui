import React from 'react'
import { NavPageContainer, RadioButton } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { RadioButtonImportCode,RadioButtonUsageCode } from './codes'
import PropsView from './props-view'

class RadioButtonDocs extends React.Component {

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>RadioButton</h1>
        
    <RadioButton
      defaultChecked={true}
      name="2"
      label="Hellow"
      //disabled
      tooltip="this is radio button"
    />
    &nbsp;&nbsp;&nbsp;&nbsp;
    <RadioButton
      name="2"
      label="World"
      //disabled
      tooltip="this is radio button"
    />

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {RadioButtonImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {RadioButtonUsageCode}
    </SyntaxHighlighter>

    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default RadioButtonDocs