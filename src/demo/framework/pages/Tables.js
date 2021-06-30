import React from 'react'
import { NavPageContainer, TableView, InputSearchBox, ButtonIcon } from '../../../lib'
import TableData from './data/tablesData.json'

class Tables extends React.Component {

  constructor() {
    super();
    this.state = {
      data_i: TableData,
        data: TableData
    }
  }

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
      const data = prevState.data_i.filter(element => {
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

    </NavPageContainer>
  )
 }
}

export default Tables