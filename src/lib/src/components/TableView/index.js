import React, { useState, useEffect } from "react";

const TableView = ({
  rows = [],
  columns = [],
  rowFontSize = 16,
  headerFontSize = 18,
  TableHeaderComponent,
  TableFooterComponent
}) => {

  const generateKey = () => { return `row_${Math.random()}`; }

  const rows_data = rows;
  useEffect(() => {
    //console.log('rows data state changed from parent');
    setRows(rows_data);
  }, [rows_data]);

  const [_rows_, setRows] = useState(rows_data);
  const [tappedColumn, setTappedColumn] = useState(undefined);

  const alphaOrder = (col_header) => {
    const myData = [].concat(_rows_).sort((a, b) => a[col_header] > b[col_header] ? 1 : -1);

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
    {TableHeaderComponent}
    <table className="ui-table-view">
      <thead style={{ fontSize: headerFontSize }}>
        <tr className="ui-table-tr">
        {columns.map((item, index) => (
          <th
            className={ item.sortable === false ? "no-sortable" : "sortable" }
            align="left"
            key={index+item}
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
      <tbody style={{ fontSize: rowFontSize }}>
        {_rows_.map((item) => (
          <tr key={generateKey()}>
            {item.map((item_, index) => (
              <td key={index+item_}>
                {item_}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    {TableFooterComponent}
    </div>
  )
}

export default TableView;