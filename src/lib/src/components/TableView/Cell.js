import React from "react";

const Cell = (props) => {

  const rows_data = props.rows;

  return (
    <tr>
      {console.log("rendered")}
      {rows_data.map((item, index) => (
        <td key={index}>
          {item}
        </td>
      ))}
    </tr>
  )
}

Cell.defaultProps = {
  rows: []
}

export default Cell;