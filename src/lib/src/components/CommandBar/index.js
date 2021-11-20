import React from 'react'

const CommandBar = (props) => {
  return (
    <div
      className="app-command-bar"
      style={{backgroundColor: props.backgroundColor,
              ...props.style}}>
        <div className={ props.buttonStyle === "row"
        ? "app-command-items row"
        : "app-command-items" }
        style={{
          height: props.height
        }}>
          {props.children}
        </div>
    </div>
  )
}

CommandBar.defaultProps = {
  height: 45
}

export default CommandBar