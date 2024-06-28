import React, { useState, useEffect } from "react";

const TableView = (props) => {

  const generateKey = () => { return `row_${Math.random()}`; }

  const rows_data = props.rows;
  useEffect(() => {
    //console.log('rows data state changed from parent');
    setRows(rows_data);
  }, [rows_data]);

  const [rows, setRows] = useState(rows_data);
  const [tappedColumn, setTappedColumn] = useState(undefined);

  const alphaOrder = (col_header) => {
    const myData = [].concat(rows).sort((a, b) => a[col_header] > b[col_header] ? 1 : -1);

    if(tappedColumn === col_header) {
      setRows(rows_data);
      setTappedColumn(undefined);
    } else {
      setRows(myData);
      setTappedColumn(col_header);
    }
  }

  return (
    <div className="ui-table-view-container">
    {props.TableHeaderComponent}
    <table className="ui-table-view">
      <thead style={{ fontSize: props.headerFontSize }}>
        <tr className="ui-table-tr">
        {props.columns.map((item, index) => (
          <th
            className={ item.sortable === false ? "no-sortable" : "sortable" }
            align="left"
            key={index}
            onClick={() => alphaOrder(index)}>
            { item.title } {
                item.showSortIcon === false ? ""
              : tappedColumn === index
              ? <i className="icons10-arrow-up"></i>
              : <i className="icons10-arrow-down"></i>
            }
          </th>
        ))}
        </tr>
      </thead>
      <tbody style={{ fontSize: props.rowFontSize }}>
        {rows.map((item) => (
          <tr key={generateKey()}>
            {item.map((item_, index) => (
              <td key={index}>
                {item_}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    {props.TableFooterComponent}
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