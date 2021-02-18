import React from 'react'

const Checkbox = (props) => {
  return (
    <label className="app-checkbox">
      <input
        type="checkbox"
        defaultChecked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}/> {props.text}
    </label>
  )
}

Checkbox.defaultProps = {
  disabled: false,
  text: "Checked"
}

export default Checkbox