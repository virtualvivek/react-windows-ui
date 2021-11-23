import React from 'react'

const Checkbox = (props) => {
  return (
    <label className="app-checkbox" title={props.tooltip}>
      <input
        type="checkbox"
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
      />
      {" "+props.label}
    </label>
  )
}

Checkbox.defaultProps = {
  disabled: false,
  label: ""
}

export default Checkbox