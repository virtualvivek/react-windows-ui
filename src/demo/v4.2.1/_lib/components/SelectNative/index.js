import React from "react";

const SelectNative = (props) => {
  return (
    <div className="app-select-menu" title={props.tooltip}>
      <select name={props.name} disabled={props.disabled} {...props}>
        {props.data.map(item => (
        <option
          value={item.value}
          key={item.value}>
          {item.label}
        </option>
        ))}
      </select>
    </div>
  )
}

SelectNative.defaultProps = {
  data: []
}

export default SelectNative;