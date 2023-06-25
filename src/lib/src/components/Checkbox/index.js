import React from "react";

const Checkbox = (props) => {
  return (
    <label>
      <input
        className="app-checkbox"
        {...props}
        type="checkbox"
        name={props.name}
        value={props.value}
        title={props.tooltip}
        disabled={props.disabled}
        onChange={props.onChange}
        defaultChecked={props.defaultChecked}
      />
      {props.label && (<span> {props.label}</span>)}
    </label>
  )
}

Checkbox.defaultProps = {
  label: "",
  disabled: false,
}

export default Checkbox;