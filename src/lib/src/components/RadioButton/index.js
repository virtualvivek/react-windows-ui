import React, { forwardRef } from "react";

const RadioButton = forwardRef((props, ref) => {
  return (
    <label title={props.tooltip}>
      <input
        ref={ref}
        {...props}
        className="app-radio-button"
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
});

export default RadioButton;