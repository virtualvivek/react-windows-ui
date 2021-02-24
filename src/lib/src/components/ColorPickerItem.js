import React from 'react'
var createAlphaAccentColor = require('./utils/ThemeManager').createAlphaAccentColor

const ColorPickerItem = (props) => {

const inputRef = React.useRef()

  const setThemeColor = (color) =>{
    let radio = inputRef.current
      if(radio.checked){
        document.documentElement.style.setProperty('--AppColor', color)
        createAlphaAccentColor()
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
            onChange={() => setThemeColor(props.color)}
        />
        <div
        style={{
            backgroundColor:props.color
        }}>
        </div>
    </label>
  )
}

ColorPickerItem.defaultProps = {
  color: "#eee"
}

export default ColorPickerItem