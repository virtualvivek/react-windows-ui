import React from 'react'
import { NavPageContainer, TableView, InputSearchBox, ButtonIcon, Accordion } from '../_lib'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import TableData from './data/tablesData.json'
import { TableCode, TableDataCode } from './codes/tables'

class Tables extends React.Component {

  state={
    data_initial: TableData,
    data: TableData
  };

  componentDidMount(){
    this.appendRowItem()
  }

  appendRowItem = () => {
    const arr = [];

    if(TableData[0][3] === undefined) {
      Object.keys(TableData).forEach(function(key) {
        arr.push(TableData[key]);
        arr[key].push(
        <ButtonIcon
          icon={<i className="icons10-trash"></i>}
          onClick={() => {alert("Clicked Row "+key)}}
          tooltip="Delete Row"
        />
        )
      });
      this.setState({
        data: arr
      })
    }
  }


  handleInputChange = (event) => {
    const query = event.target.value
    this.setState(prevState => {
      const data = prevState.data_initial.filter(element => {
        return element[0].toLowerCase().includes(query.toLowerCase())
      })
      return {
        query,
        data
      } 
    })
  }

  render() {
    return (
    <NavPageContainer
      hasPadding
      animateTransition>

      <h1>Table</h1>

      <InputSearchBox
        placeholder="Search by Fruits"
        onChange={this.handleInputChange}/>

      <div className="app-hr"></div>

      <TableView
        columns={[
          { 'title':'Fruits' },
          { 'title':'Energy (KCal)','showSortIcon': true },
          { 'title':'Color','showSortIcon': true },
          { 'title':'Actions','showSortIcon': false, 'sortable': false }
        ]}
        rows={this.state.data}
      />

      <br/>
      <Accordion title="💻 Code - TableView" focused width={'80%'}>
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers
          style={vscDarkPlus}
          className="code">
          {TableCode}
        </SyntaxHighlighter>
      </Accordion>

      <br/>
      <h3>tablesData.JSON</h3>
      <Accordion title="💻 Code - Table Data" focused width={'80%'}>
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers
          style={vscDarkPlus}
          className="code">
          {TableDataCode}
        </SyntaxHighlighter>
      </Accordion>
      <br/><br/><br/><br/>

    </NavPageContainer>
  )
 }
}

export default Tables