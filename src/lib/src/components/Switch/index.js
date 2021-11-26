import React from 'react'

const Switch = (props) => {
  return (
    <label
      class="app-switch"
      title={props.tooltip}>
      <input
        type="checkbox"
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
        onChange={props.onChange} />
      <div class="app-switch-view"></div>
      {props.label && (
        <span data-off={props.labelOff} data-on={props.labelOn}></span>
      )}
    </label>
  )
}

Switch.defaultProps = {
  labelOff: "Off",
  labelOn: "On",
  label: true
}

export default Switch