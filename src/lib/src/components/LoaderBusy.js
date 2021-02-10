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

    let alphaColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color_light_grey');
    alphaColor = alphaColor.trim();
    alphaColor = alphaColor+'D1';
    
    return <>
    <div  
      className={
      props.isVisible ? 
      "app-dim-overlay show" 
      : "app-dim-overlay"}
      style={{
        backgroundColor:alphaColor
      }}></div>
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
