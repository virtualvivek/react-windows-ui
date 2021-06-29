import React from 'react'
import { NavPageContainer, TableView, InputSearchBox, ButtonIcon } from '../../../lib'
import TableData from './data/tablesData.json'

class Tables extends React.Component {

  constructor() {
    super();
    this.state = {   
        data: TableData
    }
  }

  componentDidMount(){
    this.appendRowItem()
  }

  appendRowItem = () => {
    const arr = [];

    if(TableData[0][2] === undefined) {
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


  handleInputChange = event => {
    const query = event.target.value
    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase())
      })
      return {
        query,
        filteredData
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
        placeholder="Search a contact"
        onChange={this.handleInputChange}/>

      <div className="app-hr"></div>

      <TableView
        columns={[
          { 'title':'Apple' },
          { 'title':'Orange','showSortIcon': true },
          { 'title':'Actions','showSortIcon': false, 'sortable': false }
        ]}
        rows={this.state.data}
      />

    </NavPageContainer>
  )
 }
}

export default Tables