import React from 'react'
import { NavPageContainer, SelectBox } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { SelectBoxImportCode,SelectBoxUsageCode } from './codes'
import PropsView from './props-view'

class SelectBoxDocs extends React.Component {


render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>SelectBox</h1>
  

    <SelectBox
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
      {SelectBoxImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SelectBoxUsageCode}
    </SyntaxHighlighter>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default SelectBoxDocs