import React from 'react'


const LoaderBusy = (props) => {

  const renderLoader = () => {
    return <div className="app-loader-busy">
    <div className="w-ball-wrapper ball-1">
      <div className="w-ball"></div>
    </div>
    <div className="w-ball-wrapper ball-2">
      <div className="w-ball"></div>
    </div>
    <div className="w-ball-wrapper ball-3">
      <div className="w-ball"></div>
    </div>
    <div className="w-ball-wrapper ball-4">
      <div className="w-ball"></div>
    </div>
    <div className="w-ball-wrapper ball-5">
      <div className=" w-ball"></div>
    </div>
  </div>
  }

  const renderLoaderFullScreen = () => {
    return <>
    <div  
      className={
      props.isVisible ? 
      "app-dim-overlay light show" 
      : "app-dim-overlay"}></div>
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
