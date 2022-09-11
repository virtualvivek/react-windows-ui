import React from "react";

const Checkbox = (props) => {
  return (
    <label className="app-checkbox" title={props.tooltip}>
      <input
        {...props}
        type="checkbox"
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
        defaultChecked={props.defaultChecked}
      />
      {" "+props.label}
    </label>
  )
}

Checkbox.defaultProps = {
  disabled: false,
  label: ""
}

export default Checkbox;