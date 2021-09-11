import React from 'react'
import { NavPageContainer,InputSearchBar,InputSearchBox,InputSearchSuggestion} from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { SearchBarImportCode,
  SearchBoxImportCode,
  SearchSuggestionImportCode,
  SearchBarUsageCode,
  SearchBoxUsageCode,
  SearchSuggestionUsageCode } from './codes'
import PropsView from './props-view'

class InputSearchDocs extends React.Component {


render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>InputSearch</h1>
    <p><span className="color-primary">InputSearch</span>  defines a text field for entering a search string.</p>
        
    <h2>InputSearchBar</h2>

    <InputSearchBar
      placeholder="Search here"
      onSubmit={() => {}}
      //tooltip="tooltip title"
    />

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SearchBarImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SearchBarUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>
    <h2>InputSearchBox</h2>

    <InputSearchBox
      placeholder="Enter to Search"
      onChange={() => {}}
      //tooltip="tooltip title"
    />

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SearchBoxImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SearchBoxUsageCode}
    </SyntaxHighlighter>


  
    <div className="app-hr"></div>
    <h2>InputSearchSuggestion</h2>

    <InputSearchSuggestion
      placeholder="Type 'a' .."
      data={[
        {label: 'apple', link: '#', icon:<i className="icons10-baby"></i>},
        {label: 'orange', link: '#',onClick:this.function},
        {label: 'banana', link: '#'},
        {label: 'peach', link: '#'},
      ]}
      //tooltip="tooltip title"
    />

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SearchSuggestionImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SearchSuggestionUsageCode}
    </SyntaxHighlighter>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default InputSearchDocs