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
        defaultChecked={props.defaultChecked} />
      <div className="app-switch-view"></div>
      {props.label && (
        <span
          data-on={props.labelOn}
          data-off={props.labelOff}>
        </span>
      )}
    </label>
  )
}

Switch.defaultProps = {
  labelOff: "Off",
  labelOn: "On",
  label: true
}

export default Switch;