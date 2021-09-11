import React from 'react'
var createAlphaPrimaryColor = require('../utils/ThemeManager').createAlphaPrimaryColor

const ColorPickerItem = (props) => {

const inputRef = React.useRef()

  const setThemeColor = (color) => {
    let radio = inputRef.current
      if(radio.checked) {
        document.documentElement.style.setProperty('--PrimaryColor', color)
        createAlphaPrimaryColor()
      }
  }

  return (
    <label className="app-color-picker-item">
      <input
        type="radio"
        className="item"
        ref={inputRef}
        name={props.name}
        defaultChecked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange? props.onChange : () => setThemeColor(props.color)}
      />
      <div
      style={{
          backgroundColor: props.color,
          backgroundImage: props.image ? "url(" + props.image + ")" : '',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
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