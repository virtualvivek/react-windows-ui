import React, { useState, useEffect } from "react";
import Cell from "./Cell";

const TableView = (props) => {

  const rows_data = props.rows;
  useEffect(() => {
    //console.log('rows data state changed from parent');
    setRows(rows_data)
  }, [rows_data])

  const [rows, setRows] = useState(rows_data);
  const [tappedColumn, setTappedColumn] = useState(undefined);

  const alphaOrder = (index) => {
    const myData = [].concat(rows).sort((a, b) => a[index] > b[index] ? 1 : -1);

    if( tappedColumn === index) {
      setRows(rows_data)
      setTappedColumn(undefined)
    } else {
      setRows(myData)
      setTappedColumn(index)
    }
  }

  return (
    <div className="app-table-view-container">
    <table className="app-table-view">
      <thead style={{ fontSize: props.headerFontSize }}>
        <tr className="app-table-tr">
        {props.columns.map((item, index) => (
          <th
            className={ item.sortable === false ? "no-sortable" : "sortable" }
            align="left"
            key={index}
            onClick={() => alphaOrder(index)}>
            { item.title } {
              item.showSortIcon === false ? ""
            : tappedColumn === index ? <i className="icons10-arrow-up"></i>
            : <i className="icons10-arrow-down"></i>
            }
          </th>
        ))}
        </tr>
      </thead>
      <tbody style={{ fontSize: props.rowFontSize }}>
        {rows.map((item, index) => (
          <Cell rows={item} key={index+item} />
        ))}
      </tbody>
    </table>
    </div>
  )
}

TableView.defaultProps = {
  rows: [],
  columns: [],
  rowFontSize: 16,
  headerFontSize: 18
}

export default TableView;