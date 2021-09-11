import React from 'react'

const ColorPickerItem = (props) => {
  return (
    <label className="app-color-picker-item">
      <input
        type="radio"
        className="item"
        name={props.name}
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
        onChange={props.onChange}
        value={props.color}
      />
      <div
      style={{
          backgroundColor: props.color,
          width: props.width,
          height: props.height
      }}>
      </div>
    </label>
  )
}

ColorPickerItem.defaultProps = {
  color: "#eee"
}

export default ColorPickerItem