import React from 'react'
import { NavPageContainer,TableView } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { TableViewImportCode,TableViewUsageCode } from './codes'
import PropsView from './props-view'

class TableViewDocs extends React.Component {

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>TableView</h1>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {TableViewImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <TableView
      columns={[
        { 'title':'Fruits' },
        { 'title':'Energy (KCal)','showSortIcon': true },
        { 'title':'Color','showSortIcon': false, 'sortable': false },
      ]}
      rows={[
        [ "Papaya", 11845, "Orange" ],
        [ "Grapes", 12867, "Green"],
        [ "Apple", 10867, "Red"]
      ]}
    />
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {TableViewUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>

    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
  );
 }
}

export default TableViewDocs