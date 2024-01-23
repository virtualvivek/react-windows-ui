import React, { forwardRef } from "react";

const RadioButton = forwardRef((props, ref) => {

  const {
    name,
    value,
    label,
    tooltip,
    disabled,
    onChange,
    defaultChecked,
    ...otherProps
  } = props;

  return (
    <label title={tooltip}>
      <input
        ref={ref}
        {...otherProps}
        className="app-radio-button"
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      {label && (<span> {label}</span>)}
    </label>
  )
});

export default RadioButton;