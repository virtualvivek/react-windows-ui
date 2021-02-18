import React from 'react'

const Switch = (props) => {
  return (
    <div className={props.isLoading ?
      "app-progress-indeterminate animate" : "app-progress-indeterminate"}>
      <div className="progress-bar"></div>
    </div>
  )
}

Switch.defaultProps = {
  isLoading: true
}

export default Switch