import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="app-progress-container" title={props.tooltip}>

      {props.icon && (<div className="app-progress-icon">{props.icon}</div>)}
      
      <div className="app-progress-content">
        <span className="app-progress-title">{props.title}</span>
        <div
          className={props.showIcon ? "app-progress withIcon" : "app-progress"}
          style={{
            height: props.height
          }}>
          <span
            style={{
              width: props.setProgress+"%",
              backgroundColor: props.color
            }}>
          </span>
        </div>
        {props.subtitle && (<span className="app-progress-subtitle">{props.subtitle}</span>)}
      </div>
    </div>
  )
}

ProgressBar.defaultProps = {
  showIcon: false,
  setProgress: 0
}

export default ProgressBar;