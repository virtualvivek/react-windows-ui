import React from 'react'

const Cell = (props) => {

  const rows_data = props.rows

  return (
    <tr>
      {rows_data.map((item, index) => (
        React.isValidElement(item) ?
          <td key={index+item} style={{padding:0}}>
            {item}
          </td>
          :
          <td key={index+item}>
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