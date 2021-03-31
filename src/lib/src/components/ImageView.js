import React, { useState } from 'react'
import LoaderBusyWrapper from './_common/LoaderBusyWrapper'

const AvatarView = (props) => {

  const [didLoad, setLoad] = useState(false)

  const renderLoader = () => {
        return  <div className="app-image-view-loader">
                  <div className="app-loader-busy light animate">
                    <LoaderBusyWrapper/>
                  </div>
                </div>
  }

  const renderShadow = () => {
    return <div className="shadow"></div>
  }
  const handleOnLoad = () => {
    setLoad(true)
  }

  return (
    <div className="app-image-view-container"
        style={{
            width: props.width,
            height: props.height,
            padding: props.padding,
            margin: props.margin,
            borderRadius: props.borderRadius
        }}>
        <img
          className="app-image-view"
          src={props.src}
          alt={props.alt}
          style={{
            objectFit : props.objectFit
          }}
          // onLoad={() => setLoad(true)}
          onLoad={() => { handleOnLoad(); props.onLoad() }}
        />
        <div className="app-image-words">
          <h1>{props.title}</h1>
          <span>{props.subtitle}</span>
        </div>
        
        { props.insetShadow ? renderShadow() : "" }
        { props.isLoading ? renderLoader() : "" }
        { didLoad ? "" : renderLoader() }
    </div>
  )
}

AvatarView.defaultProps = {
    isLoading: false,
    width: 124,
    height: 124,
    alt : "image",
    objectFit : 'cover',
    onLoad: () => {},
  }

export default AvatarView