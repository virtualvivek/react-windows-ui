import React, { useState } from 'react'


const AvatarView = (props) => {

  const [didLoad, setLoad] = useState(false);

    const renderLoader = () => {
          return <div className="app-avatar-loader">
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

    const renderDropShadow = () => {  
      return <img 
      className={props.size === "small" ? "app-avatar small drop-shadow" 
      : props.size === "large" ? "app-avatar large drop-shadow"
      : "app-avatar medium drop-shadow"}
      src={props.src}
      alt={props.alt}
      />    
      }  

  return (
    <div className="app-avatar-container">
        <img 
          className={props.size === "small" ? "app-avatar small" 
          : props.size === "large" ? "app-avatar large"
          : "app-avatar medium"}
          src={props.src}
          alt="a"
          style={{
            objectFit: props.objectFit,
            width: props.width,
            height: props.height,
          }}
          onLoad={() => setLoad(true)}
          />

          {props.showDropShadow ? renderDropShadow() : ""}
          {props.isLoading ? renderLoader() : ""} 
          {didLoad ? "" : renderLoader()} 
            
    </div>
  )
}

AvatarView.defaultProps = {
    isLoading: false,
    objectFit: 'cover',
    alt: "image"
    
  }

export default AvatarView
