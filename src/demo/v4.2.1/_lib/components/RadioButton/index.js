import React from "react";

const RadioButton = (props) => {
  return (
    <label
      className="app-radio-button"
      title={props.tooltip}>
      <input
        {...props}
        type="radio"
        className="app-radio"
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
        defaultChecked={props.defaultChecked}
      />
      <span>{" "+props.label}</span>
    </label>
  )
}

export default RadioButton;