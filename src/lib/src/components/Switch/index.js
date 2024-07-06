import React, { forwardRef } from "react";

const Switch = forwardRef(({
  tooltip,
  disabled,
  label = true,
  labelOn = "On",
  labelOff = "Off",
  defaultChecked,
  labelFixedWidth,
  onChange = () => {},
  labelPosition = "end",
  ...otherProps
}, ref) => {

  return (
    <label className="ui-switch-container" title={tooltip}>
      {label && labelPosition === "start" && (
        <span
          className="ui-switch-label"
          data-on={labelOn}
          data-off={labelOff}
          style={{ width: labelFixedWidth }}>
        </span>
      )}

      <input
        ref={ref}
        {...otherProps}
        type="checkbox"
        className="ui-switch"
        disabled={disabled}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />

      {label && labelPosition === "end" && (
        <span
          className="ui-switch-label"
          data-on={labelOn}
          data-off={labelOff}
          style={{ width: labelFixedWidth }}>
        </span>
      )}
    </label>
  )
});

export default Switch;