import React from 'react'

const ButtonIcon = (props) => {
  return (
    <button
      className="app-button-icon"
      disabled={props.disabled}
      onClick={props.onClick}
      title={props.tooltip}
      style={{
        width: props.width,
        height: props.height,
        fontSize: props.iconSize
      }}>
      {props.icon}
    </button>
  )
}
  
ButtonIcon.defaultProps = {
  disabled: false,
  width: 50,
  height: 35
}
  
export default ButtonIcon