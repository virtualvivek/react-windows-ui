import React from 'react'

const LoaderBar = (props) => {
  return (
    <div className={props.isLoading ?
      "app-loader-bar animate" : "app-loader-bar"}>
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