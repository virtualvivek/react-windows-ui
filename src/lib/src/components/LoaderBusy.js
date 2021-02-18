import React from 'react'
import LoaderBusyWrapper from './_common/LoaderBusyWrapper'

const LoaderBusy = (props) => {

  const renderLoader = () => {
    return  <div className="app-loader-busy">
              <LoaderBusyWrapper/>
            </div>
  }

  const renderLoaderFullScreen = () => {
    
  return <>
    <div
      className={
      props.isVisible ?
      "app-dim-overlay show"
      : "app-dim-overlay"}
      style={{
        backgroundColor: props.backgroundColor
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

LoaderBusy.defaultProps = {
  backgroundColor: 'var(--color_light_grey_alpha)'
}

export default LoaderBusy