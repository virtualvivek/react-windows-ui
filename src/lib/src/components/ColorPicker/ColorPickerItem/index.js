import React from "react";

const ColorPickerItem = (props) => {
  return (
    <label className="ui-color-picker-item">
      <input
        type="radio"
        className="item"
        name={props.name}
        value={props.color}
        disabled={props.disabled}
        onChange={props.onChange}
        defaultChecked={props.defaultChecked}
      />
      <div
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color
      }}>
      </div>
    </label>
  )
}

ColorPickerItem.defaultProps = {
  color: "#eee"
}

export default ColorPickerItem;