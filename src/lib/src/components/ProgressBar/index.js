import React from "react";

const ProgressBar = ({
  color,
  width,
  height,
  tooltip,
  setProgress = 0
}) => {

  return (
    <div
      title={tooltip}
      className={`ui-progress-bar${setProgress === "hidden" ? "hide":""}`}
      style={{
        height: height,
        width: width
      }}>
      <span role="progressbar"
        {...(setProgress === "indeterminate" && { "className": "indeterminate" })}
        style={{
          width: setProgress !== "indeterminate" ? setProgress+"%" : "",
          backgroundColor: color
        }}>
      </span>
    </div>
  );
};

export default ProgressBar;