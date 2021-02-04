import React from 'react'


const CommandBar = (props) => {
  return (
    <div className="app-command-bar">
        <div className="app-command-items">

        
        <button className="app-button">
            <i className="icons10-settings"></i>
            <span>Settings</span>
        </button>
        <button className="app-button">
            <i className="icons10-more"></i>
        </button>
       
        </div> 
    </div>
  )
}

CommandBar.defaultProps = {
  title: "Title",
  message: "message displays here",
  isVisible: false
}

export default CommandBar;
