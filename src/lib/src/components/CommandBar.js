import React from 'react'

const CommandBar = (props) => {
  return (
    <div className="app-command-bar">
        <div className="app-command-items">
          {props.children}
        </div> 
    </div>
  )
}


export default CommandBar
