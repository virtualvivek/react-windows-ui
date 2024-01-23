import React from "react";

const ProgressBar = (props) => {
  return (
    <div
      className={`app-progress-container${props.setProgress==="hidden" ? "hide":""}`}
      title={props.tooltip}>
      <div className="app-progress-content">
        <span className="app-progress-title">{props.title}</span>
        <div className="app-progress-bar" style={{height: props.height}}>
          <span role="progressbar"
            {...(props.setProgress === "indeterminate" && { "className": "indeterminate" })}
            style={{
              width: props.setProgress !== "indeterminate" ? props.setProgress+"%" : "",
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
  setProgress: 0,
}

export default ProgressBar;