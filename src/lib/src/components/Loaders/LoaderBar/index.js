import React from "react";

const LoaderBar = (props) => {

  const setTheme = () => {
    return props.setTheme === "light" ? " light" : "";
  }

  return (
    <div className={props.isLoading
      ? `app-loader-bar animate${setTheme()}`
      : `app-loader-bar${setTheme()}`
      }>
      <div className="app-ldr-bar first"></div>
      <div className="app-ldr-bar second"></div>
      <div className="app-ldr-bar third"></div>
      <div className="app-ldr-bar fourth"></div>
    </div>
  )
}

LoaderBar.defaultProps = {
  isLoading: true
}

export default LoaderBar;