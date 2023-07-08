import React, { useState } from "react";

const ColorPickerPalette = (props) => {

  const {
    color,
    width,
    height,
    ...otherProps
  } = props;

  const [icolor, setColor] = useState(color);

  return (
    <label className="app-color-picker-item palette">
      <input
        type="color"
        value={icolor}
        {...otherProps}
        disabled={props.disabled}
        onChange={props.onChange}
        onChangeCapture={e => setColor(e.target.value)}
      />
      <div
      style={{
        width: width,
        height: height,
        backgroundColor: icolor
      }}>
      </div>
    </label>
  )
}

ColorPickerPalette.defaultProps = {
  color: "#eee"
}

export default ColorPickerPalette;