import React from 'react'
import LoaderBusyWrapper from './_common/LoaderBusyWrapper'

const LoaderBusy = (props) => {

  const renderLoader = () => {
    return  <div className="app-loader-busy">
              <LoaderBusyWrapper/>
            </div>
  }

  const renderLoaderFullScreen = () => {

    let alphaColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color_light_grey')
    alphaColor = alphaColor.trim()
    alphaColor = alphaColor+'D1'
    
  return <>
    <div
      className={
      props.isVisible ?
      "app-dim-overlay show"
      : "app-dim-overlay"}
      style={{
        backgroundColor:alphaColor
      }}>
    </div>
    <div
      onClick={props.onBackdropPress}
      className={props.isVisible ?
      "app-loader-busy-fullscreen show"
      : "app-loader-busy-fullscreen"}>
      {renderLoader()}
    </div>
    </>
  }


  return (
    <>
    {props.display === "fullscreen" ?
      renderLoaderFullScreen()
      : renderLoader()
    }
    </>
  )
}



export default LoaderBusy
