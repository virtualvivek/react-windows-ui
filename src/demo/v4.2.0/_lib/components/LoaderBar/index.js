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
      <div className="app-loaderBar first"></div>
      <div className="app-loaderBar second"></div>
      <div className="app-loaderBar third"></div>
      <div className="app-loaderBar fourth"></div>
    </div>
  )
}

LoaderBar.defaultProps = {
  isLoading: true
}

export default LoaderBar;