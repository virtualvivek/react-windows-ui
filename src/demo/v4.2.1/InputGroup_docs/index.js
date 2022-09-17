import React from 'react'
import { NavPageContainer, InputText } from '../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { InputTextImportCode, InputTextUsageCode, InputTextStatusUsageCode,
  InputTextPasswordUsageCode, InputTextLabelUsageCode, InputDateUsageCode } from './codes'
import PropsView from './props-view'

class InputGroupDocs extends React.Component {

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>InputText</h1>
    <p className="font-size-18px">The <span className="color-primary">Input</span> element is used to create interactive controls for forms in order to accept data from the user.</p>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {InputTextImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <InputText
      placeholder="Enter a text"
      tooltip="InputText tooltip title"
    />

    {/* <InputSearchBar />

    <Select
      defaultValue="blue"
      onChange={(value)=> alert(value)}
      data={[
        {label: 'red', value: 'red'},
        {label: 'blue', value: 'blue'},
        {label: 'green', value: 'green'},
        {label: 'pink', value: 'pink'},
      ]}
    /> */}

    <br/><br/>


    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {InputTextUsageCode}
    </SyntaxHighlighter>

    <h2>Input Status</h2>

    <InputText
      placeholder="Enter a text success"
      setStatus="success"/>
    <br/><br/>
    <InputText
      placeholder="Enter a text danger"
      setStatus="danger"/>
    <br/><br/>
    <InputText
      placeholder="Enter a text loading"
      setStatus="loading"/>
    <br/><br/>
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {InputTextStatusUsageCode}
    </SyntaxHighlighter>

    <h2>Input Password</h2>

    <InputText
      type="password"
      placeholder="Enter a password"/>
    <br/><br/>
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {InputTextPasswordUsageCode}
    </SyntaxHighlighter>

    <h2>Input Label</h2>

    <InputText
      width={225}
      label="label"
      placeholder="Enter a text"/>
    <br/><br/>
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {InputTextLabelUsageCode}
    </SyntaxHighlighter>

    <h2>Input Date</h2>

    <h2>Import</h2>

    <InputText
      type="date"
      placeholder="Select Date"
      tooltip="InputDate tooltip title" />
    <br/><br/>
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {InputDateUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default InputGroupDocs