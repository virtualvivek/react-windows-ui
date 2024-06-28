import React from "react";

const LoaderBar = (props) => {

  const setTheme = () => {
    return props.setTheme === "light" ? " light" : "";
  }

  return (
    <div className={props.isLoading
      ? `ui-loader-bar animate${setTheme()}`
      : `ui-loader-bar${setTheme()}`
      }>
      <div className="ui-ldr-bar ball-1"></div>
      <div className="ui-ldr-bar ball-2"></div>
      <div className="ui-ldr-bar ball-3"></div>
      <div className="ui-ldr-bar ball-4"></div>
    </div>
  )
}

LoaderBar.defaultProps = {
  isLoading: true
}

export default LoaderBar;