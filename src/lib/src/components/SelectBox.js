import React from 'react'


const SelectBox = (props) => {
  return (
    <div className="app-select-styled">
        <select>
            {props.data.map(item => (
            <option value={item.value} key={item.value}>
                {item.label}
            </option>
            ))}
        </select>
    </div>
  )
}

SelectBox.defaultProps = {
    data:[]
  }

export default SelectBox
