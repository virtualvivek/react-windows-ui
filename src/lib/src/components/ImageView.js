import React from 'react'


const AvatarView = (props) => {

    const renderLoader = () => {
          return <div className="app-image-view-loader">
            <div className="app-loader-busy light">
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
          </div>
    }

    const renderShadow = () => {
      return <div className="shadow"></div>
    }

  return (
    <div className="app-image-view-container"
        style={{
            width: props.width,
            height: props.height,
            borderRadius : props.borderRadius
        }}>
        <img 
          className="app-image-view"
          src={props.src}
          alt={props.alt}
          style={{
            objectFit : props.objectFit
          }}
          />
          <div className="app-image-words">
          <h1>Iron Man</h1>
          <span>Information about image or data</span>
          </div>
          
          
          {props.insetShadow ? renderShadow() : ""} 

          {props.isLoading ? renderLoader() : ""} 
            
    </div>
  )
}

AvatarView.defaultProps = {
    isLoading: false,
    width: 124,
    height: 124,
    alt : "image",
    objectFit : 'cover',
  }

export default AvatarView
