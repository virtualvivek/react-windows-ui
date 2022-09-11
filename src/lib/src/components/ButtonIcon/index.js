import React from 'react'

const ButtonIcon = (props) => {
  return (
    <button
      {...props}
      className="app-btn-icon"
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
  disabled: false
}
  
export default ButtonIcon