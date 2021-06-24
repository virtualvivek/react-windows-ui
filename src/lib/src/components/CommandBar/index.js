import React from 'react'

const CommandBar = (props) => {
  return (
    <div
      className={ props.position ? "app-command-bar" : "app-command-bar fixed" }
      style = {
        props.showDropShadow ?
        {
          backgroundColor: 'var(--color_light_grey_alpha)',
          backdropFilter: 'blur(24px)',
          position: props.position,
          top: props.top,
          margin: props.margin,
          zIndex: props.zIndex
        }
        : 
        {
          backgroundColor:'',
          position: props.position,
          top: props.top,
          margin: props.margin,
          zIndex: props.zIndex
        }
      }>
        <div className="app-command-items">
          {props.children}
        </div>
    </div>
  )
}

CommandBar.defaultProps = {
  zIndex: 4
}

export default CommandBar