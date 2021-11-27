import React from 'react'

const CommandBar = (props) => {
  return (
    <div
      className="app-command-bar"
      style={{
        backgroundColor: props.backgroundColor,
        ...props.style}}>
     
        {props.children}
    </div>
  )
}

export default CommandBar;