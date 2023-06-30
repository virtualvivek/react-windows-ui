import React from "react";

const RadioButton = (props) => {
  return (
    <label title={props.tooltip}>
      <input
        {...props}
        class="app-radio-button"
        type="radio"
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
        defaultChecked={props.defaultChecked}
      />
      {props.label && (<span> {props.label}</span>)}
    </label>
  )
}

export default RadioButton;