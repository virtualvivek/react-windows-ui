import React, { useState } from "react";
import LoaderBusyWrapper from "../_common/LoaderBusyWrapper";

const ImageView = (props) => {

  const [didLoad, setLoad] = useState(false);

  const renderLoader = () => {
    return  <div className="app-img-view-loader">
              <div className="app-loader-busy light animate">
                <LoaderBusyWrapper/>
              </div>
            </div>
  }

  const renderShadow = () => {
    return <div className="shadow"></div>
  }
  
  const handleOnLoad = () => {
    setLoad(true);
  }

  return (
    <div
      className="app-img-view-container"
      title={props.tooltip}
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
        padding: props.padding,
        borderRadius: props.borderRadius
      }}>
      <img
        className="app-img-view"
        src={props.src}
        alt={props.alt}
        style={{
          objectFit: props.objectFit
        }}
        // onLoad={() => setLoad(true)}
        onLoad={() => { handleOnLoad(); props.onLoad() }}
        onError={() => { handleOnLoad(); props.onError() }}
      />
      <div className="app-img-words">
        <h1>{props.title}</h1>
        <span>{props.subtitle}</span>
      </div>
      
      { props.insetShadow ? renderShadow() : "" }
      { props.isLoading ? renderLoader() : "" }
      { didLoad ? "" : renderLoader() }
    </div>
  )
}

ImageView.defaultProps = {
  width: 124,
  height: 124,
  alt : "image",
  isLoading: false,
  objectFit : "cover",
  onLoad: () => {},
  onError: () => {}
}

export default ImageView;