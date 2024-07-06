import React from "react";

const LoaderBar = ({
  setTheme,
  isLoading =  true
}) => {

  const setupTheme = () => {
    return setTheme === "light" ? " light" : "";
  }

  return (
    <div className={isLoading
      ? `ui-loader-bar animate${setupTheme()}`
      : `ui-loader-bar${setupTheme()}`
    }>
      <div className="ui-ldr-bar ball-1"></div>
      <div className="ui-ldr-bar ball-2"></div>
      <div className="ui-ldr-bar ball-3"></div>
      <div className="ui-ldr-bar ball-4"></div>
    </div>
  )
};

export default LoaderBar;