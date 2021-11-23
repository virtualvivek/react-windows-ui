import React from 'react'

const LoaderBar = (props) => {

  const setTheme = () => {
    return props.setTheme === "light" ? " light" : "";
  }

  return (
    <div className={props.isLoading
      ? "app-loader-bar animate" + setTheme()
      : "app-loader-bar" + setTheme()
      }>
      <div className="app-loaderBar" id="first"></div>
      <div className="app-loaderBar" id="second"></div>
      <div className="app-loaderBar" id="third"></div>
      <div className="app-loaderBar" id="fourth"></div>
    </div>
  )
}

LoaderBar.defaultProps = {
  isLoading: true
}

export default LoaderBar