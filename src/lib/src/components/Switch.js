import React from 'react'

const Switch = (props) => {
  return (
    <label className="app-switch">
      <input
        type="checkbox"
        defaultChecked={props.checked}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <div
        dataoff={props.textOff}
        dataon={props.textOn}>
      </div>
    </label>
  )
}

Switch.defaultProps = {
  textOff: "Off",
  textOn: "On"
}

export default Switch