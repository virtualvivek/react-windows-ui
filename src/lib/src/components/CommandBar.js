import React from 'react'

const CommandBar = (props) => {
  return (
    <div
      className={props.position ?
      "app-command-bar" : "app-command-bar fixed"}
      style = {
        props.showDropShadow ?
        {
          backgroundColor: 'var(--color_light_grey_alpha)',
          backdropFilter:'blur(24px)',
          position: props.position,
          top: props.top,
          margin: props.margin
        }
        : 
        {
          backgroundColor:'',
          position: props.position,
          top: props.top,
          margin: props.margin
        }
      }
      >
        <div className="app-command-items">
          {props.children}
        </div>
    </div>
  )
}

export default CommandBar