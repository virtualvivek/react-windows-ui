import React from 'react'

const Cell = (props) => {

  const rows_data = props.rows

  return (
    <tr>
      {rows_data.map((item, index) => (
        React.isValidElement(item) ?
          <td style={{padding:0}}
            key={index}>
            {item}
          </td>
          :
          <td
            key={index}>
            {item}
          </td>
      ))}
    </tr>
  )
}

Cell.defaultProps = {
  rows: []
}

export default Cell