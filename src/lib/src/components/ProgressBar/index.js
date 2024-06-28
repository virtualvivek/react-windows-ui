import React from "react";

const ProgressBar = (props) => {

  const {
    tooltip,
    width,
    height
  } = props;

  return (
    <div
      title={tooltip}
      className={`ui-progress-bar${props.setProgress === "hidden" ? "hide":""}`}
      style={{
          height: height,
          width: width
        }}>
      <span role="progressbar"
        {...(props.setProgress === "indeterminate" && { "className": "indeterminate" })}
        style={{
          width: props.setProgress !== "indeterminate" ? props.setProgress+"%" : "",
          backgroundColor: props.color
        }}>
      </span>
    </div>
  )
}

ProgressBar.defaultProps = {
  setProgress: 0,
}

export default ProgressBar;