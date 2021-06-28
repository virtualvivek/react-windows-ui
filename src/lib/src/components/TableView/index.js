import React from 'react'
import Cell from './Cell'

const TableView = (props) => {

  const rows_data = props.data
  const columns = props.columns
  const [rows, setRows] = React.useState(rows_data)

  const alphaOrder = (index) =>{
    const myData = [].concat(rows).sort((a, b) => a[index] > b[index] ? 1 : -1)
    setRows(myData)
  }


  return (
    <table>
      <thead>
        <tr>      
        {columns.map((item, index) => (
          <th
            align="left"
            key={index}
            onClick={() => alphaOrder(index)}>
            {item+ index}
          </th>
        ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((item) => (
          <Cell rows={item}/>
        ))}
    </tbody>

    </table>
  )
}

TableView.defaultProps = {
  data: [],
  columns: []
}

export default TableView