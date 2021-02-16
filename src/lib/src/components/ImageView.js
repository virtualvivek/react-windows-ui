import React, { useState } from 'react'
import LoaderBusyWrapper from './_common/LoaderBusyWrapper'


const AvatarView = (props) => {

  const [didLoad, setLoad] = useState(false)

  const renderLoader = () => {
        return <div className="app-image-view-loader">
          <div className="app-loader-busy light">
            <LoaderBusyWrapper/>
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
          onLoad={() => setLoad(true)}
          />
          <div className="app-image-words">
          <h1>{props.title}</h1>
          <span>{props.subtitle}</span>
          </div>
          
          {props.insetShadow ? renderShadow() : ""}
          {props.isLoading ? renderLoader() : ""}
          {didLoad ? "" : renderLoader()}
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
