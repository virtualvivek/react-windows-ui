import React from 'react'
import { NavPageContainer, Checkbox } from '../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CheckboxImportCode,CheckboxUsageCode,CheckboxInlineUsageCode } from './codes'
import PropsView from './props-view'

class CheckboxDocs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gaugeValue :50
    }
  }

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>Checkbox</h1>
        
    <Checkbox
      defaultChecked={true}
      label="Checkbox"
      onChange={() => {}}
    />


    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {CheckboxImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <Checkbox
      defaultChecked={true}
      label="Some Text"
      onChange={() => {}}
      tooltip="tooltip title"
    />
    &nbsp;&nbsp;
    <Checkbox
      defaultChecked={true}
      label="Checkbox Disabled"
      onChange={() => {}}
      disabled
      tooltip="tooltip title"
    />
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {CheckboxUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>
    <h2>Checkbox <p className="app-code">Inline</p> :</h2>


    <p>Lorem ipsum dolor sit amet&nbsp;
      <Checkbox
      defaultChecked={true}
      onChange={() => {}}
      tooltip="inline checkbox"
      name="Hi"
      value="VV"
      /> 
      sed do eiusmod tempor incididunt ut labore.
    </p>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {CheckboxInlineUsageCode}
    </SyntaxHighlighter>



    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default CheckboxDocs