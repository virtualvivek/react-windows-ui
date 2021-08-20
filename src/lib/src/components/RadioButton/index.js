import React from 'react'

const RadioButton = (props) => {
  return (
    <label className="app-label" title={props.tooltip}>
      <input
        type="radio"
        className="app-radio"
        name={props.name}
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <span>{props.label}</span>
    </label>
  )
}

export default RadioButton