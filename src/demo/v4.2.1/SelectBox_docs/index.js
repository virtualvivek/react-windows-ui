import React from 'react'
import { NavPageContainer, SelectNative,Select } from '../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { SelectImportCode,SelectUsageCode,
    SelectNativeImportCode,SelectNativeUsageCode } from './codes'
import PropsView from './props-view'

class SelectBoxDocs extends React.Component {

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>Select</h1>

    <p>The <span className="color-primary">Select</span> component is used to create a drop-down list to choose one value from multiple.</p>

    <Select
      placeholder="Some Name"
      //defaultValue="blue"
      //onChange={(value)=> alert(value)}
      data={[
        {label: 'blue', value: 'blue'},
        {label: 'red', value: 'red'},
        {label: 'orange', value: 'orange'},
        {label: 'pink', value: 'pink'},
        {label: 'green', value: 'green'}
      ]}
    />
  
    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SelectImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SelectUsageCode}
    </SyntaxHighlighter>


    <h1>SelectNative</h1>
    <p>The <span className="color-primary">SelectNative</span> renders native {`<select>`} component.</p>

    <SelectNative
      name="Some Name"
      data={[
        {label: 'red', value: 'red'},
        {label: 'blue', value: 'blue'},
        {label: 'green', value: 'green'},
        {label: 'pink', value: 'pink'},
      ]}
    />

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SelectNativeImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SelectNativeUsageCode}
    </SyntaxHighlighter>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default SelectBoxDocs