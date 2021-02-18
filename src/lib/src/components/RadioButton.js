import React from 'react'

const RadioButton = (props) => {
  return (
    <label className="app-label">
        <input
          type="radio"
          className="app-radio"
          name={props.name}
          defaultChecked={props.checked}
          disabled={props.disabled}
          onChange={props.onChange}
        />
        <span>{props.text}</span>
    </label>
  )
}

export default RadioButton