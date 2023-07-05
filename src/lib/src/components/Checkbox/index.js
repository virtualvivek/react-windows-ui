import React, { forwardRef } from "react";

const Checkbox = forwardRef((props, ref) => {
  return (
    <label>
      <input
        ref={ref}
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
});

export default Checkbox;