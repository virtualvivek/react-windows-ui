import React, { useState } from "react";
import LoaderBusyWrapper from "../_common/LoaderBusyWrapper";

const ImageView = (props) => {

  const {
    src,
    alt,
    objectFit,
    tooltip,
    width,
    height,
    margin,
    padding,
    borderRadius,
    isLoading,
    ...otherProps
  } = props;

  const [didLoad, setLoad] = useState(false);

  const renderLoader = () => {
    return  <div className="ui-img-view-loader">
              <div className="ui-loader-busy light animate">
                <LoaderBusyWrapper/>
              </div>
            </div>
  }
  
  const handleOnLoad = () => {
    setLoad(true);
  }

  return (
    <div
      className="ui-img-view-container"
      title={tooltip}
      style={{
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        borderRadius: borderRadius
      }}>
      <img
        className="ui-img-view"
        src={src}
        alt={alt}
        {...otherProps}
        style={{
          objectFit: objectFit
        }}
        // onLoad={() => setLoad(true)}
        onLoad={() => { handleOnLoad(); props.onLoad() }}
        onError={() => { handleOnLoad(); props.onError() }}
      />
      { isLoading ? renderLoader() : "" }
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