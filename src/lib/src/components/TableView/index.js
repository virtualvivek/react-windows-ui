import React, { useState } from 'react'
import Cell from './Cell'

const TableView = (props) => {

  const rows_data = props.rows
  const columns = props.columns
  const [rows, setRows] = useState(rows_data)
  const [tappedColumn, setTappedColumn] = useState(undefined)

  const alphaOrder = (index) => {
    const myData = [].concat(rows).sort((a, b) => a[index] > b[index] ? 1 : -1)

    if( tappedColumn === index) {
      setRows(rows_data)
      setTappedColumn(undefined)
    }
    else {
      setRows(myData)
      setTappedColumn(index)
    }
  }


  return (
    <table className="app-table-view">
      <thead
        style={{
          fontSize: props.headerFontSize
        }}>
        <tr className="app-table-tr">
        {columns.map((item, index) => (
          <th
            className={ item.sortable === false ? 'no-sortable' : '' }
            align="left"
            key={index}
            onClick={() => alphaOrder(index)}>
            {item.title} {item.showSortIcon === false ? '' : <i className="icons10-sort"></i>}
          </th>
        ))}
        </tr>
      </thead>
      <tbody
        style={{
          fontSize: props.rowFontSize
        }}>
        {rows.map((item, index) => (
          <Cell rows={item} key={index+item}/>
        ))}
      </tbody>
    </table>
  )
}

TableView.defaultProps = {
  rows: [],
  columns: [],
  headerFontSize: 18,
  rowFontSize: 16
}

export default TableView