import React, { useState } from "react";
import LoaderBusyWrapper from "../_common/LoaderBusyWrapper";

const AvatarView = (props) => {

  const [didLoad, setLoad] = useState(false);

  const renderLoader = () => {
    return  <div className="app-avatar-loader">
              <div className="app-loader-busy light animate">
                <LoaderBusyWrapper/>
              </div>
            </div>
  }

  const renderDropShadow = () => {
    return <img
      className={
        props.size === "small" ? "app-avatar avatar-sm drop-shadow"
      : props.size === "large" ? "app-avatar avatar-lg drop-shadow"
      : "app-avatar drop-shadow"
      }
      src={props.src}
      alt={props.alt}
      style={{
        width: props.width,
        height: props.height,
        objectFit: props.objectFit,
      }}
    />
  }

  const handleOnLoad = () => {
    setLoad(true);
  }

  return (
    <div className="app-avatar-container" title={props.tooltip}>
      <img
        className={
          props.size === "small" ? "app-avatar avatar-sm"
        : props.size === "large" ? "app-avatar avatar-lg"
        : "app-avatar"
        }
        src={props.src}
        alt={props.alt}
        style={{
          width: props.width,
          height: props.height,
          objectFit: props.objectFit,
        }}
        // onLoad={() => setLoad(true)}
        onLoad={() => { handleOnLoad(); props.onLoad() }}
        onError={() => { handleOnLoad(); props.onError() }}
      />
      { props.showDropShadow && (renderDropShadow()) }
      { props.isLoading && (renderLoader()) }
      { didLoad ? <></> : renderLoader() }
    </div>
  )
}

AvatarView.defaultProps = {
  isLoading: false,
  objectFit: "cover",
  alt: "avatar image",
  onLoad: () => {},
  onError: () => {}
}

export default AvatarView;