import React from "react";

const Switch = (props) => {
  return (
    <label
      className="app-switch"
      title={props.tooltip}>
      
      <input
        type="checkbox"
        disabled={props.disabled}
        onChange={props.onChange}
        defaultChecked={props.defaultChecked}
      />
      {
        props.label && props.labelPosition === "start" && (
          <span
            className="app-switch-label"
            data-on={props.labelOn}
            data-off={props.labelOff}
            style={{ width: props.labelFixedWidth }}>
          </span>
        )
      }
      <div className="app-switch-view"></div>
      {props.label && props.labelPosition === "end" && (
        <span
          className="app-switch-label"
          data-on={props.labelOn}
          data-off={props.labelOff}
          style={{ width: props.labelFixedWidth }}>
        </span>
      )}
    </label>
  )
}

Switch.defaultProps = {
  label: true,
  labelOn: "On",
  labelOff: "Off",
  onChange: () => {},
  labelPosition: "end"
}

export default Switch;