import React from 'react'

const RadioButton = (props) => {
  return (
    <label className="app-label-radio-button" title={props.tooltip}>
      <input
        type="radio"
        className="app-radio"
        name={props.name}
        value={props.value}
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <span>{' '+props.label}</span>
    </label>
  )
}

export default RadioButton