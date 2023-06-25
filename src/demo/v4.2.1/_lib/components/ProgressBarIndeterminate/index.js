import React from "react";

const ProgressBarIndeterminate = (props) => {
  return (
    <div className={props.isLoading ?
                      "app-progress-indeterminate animate"
                    : "app-progress-indeterminate"}>
      <div className="progress-bar"></div>
    </div>
  )
}

ProgressBarIndeterminate.defaultProps = {
  isLoading: true
}

export default ProgressBarIndeterminate;