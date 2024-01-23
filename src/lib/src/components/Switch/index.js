import React, { forwardRef } from "react";

const Switch = forwardRef((props, ref) => {

  const {
    tooltip,
    label,
    labelOn,
    labelOff,
    labelPosition,
    labelFixedWidth,
    ...otherProps
  } = props;

  return (
    <label className="app-switch-container" title={tooltip}>
      {label && labelPosition === "start" && (
        <span
          className="app-switch-label"
          data-on={labelOn}
          data-off={labelOff}
          style={{ width: labelFixedWidth }}>
        </span>
      )}

      <input
        ref={ref}
        {...otherProps}
        type="checkbox"
        class="app-switch"
        disabled={props.disabled}
        onChange={props.onChange}
        defaultChecked={props.defaultChecked}
      />

      {label && labelPosition === "end" && (
        <span
          className="app-switch-label"
          data-on={labelOn}
          data-off={labelOff}
          style={{ width: labelFixedWidth }}>
        </span>
      )}
    </label>
  )
});

Switch.defaultProps = {
  label: true,
  labelOn: "On",
  labelOff: "Off",
  onChange: () => {},
  labelPosition: "end"
}

export default Switch;