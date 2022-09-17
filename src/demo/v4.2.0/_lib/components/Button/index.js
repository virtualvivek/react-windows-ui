import React from "react";
import LoaderBusyWrapper from "../_common/LoaderBusyWrapper";

const Button = (props) => {

  const renderLoader = () => {
    return <div
        className = {
            props.type === "primary" ?  "app-loader-busy small light animate"
          : props.type === "danger" ? "app-loader-busy small light animate"
          : props.type === "success" ? "app-loader-busy small light animate"
          : "app-loader-busy small animate"
          }>
      <LoaderBusyWrapper/>
    </div>
  }

  const toggleLoading = () => {
    return props.isLoading ? "isLoading" : "notLoading";
  }

  
  return (
    <button
      className = {
        props.type ==="primary" ?  `app-button animate primary ${toggleLoading()}`
      : props.type ==="danger" ? `app-button animate danger ${toggleLoading()}`
      : props.type ==="success" ? `app-button animate success ${toggleLoading()}`
      : props.type ==="primary-outline" ? `app-button animate primary-outline ${toggleLoading()}`
      : props.type ==="danger-outline" ? `app-button animate danger-outline ${toggleLoading()}`
      : props.type ==="success-outline" ? `app-button animate success-outline ${toggleLoading()}`
      : `app-button animate ${toggleLoading()}`
      }
      style={{
        width: props.width,
        justifyContent: props.justifyContent,
        ...props.style
      }}
      type="button"
      title={props.tooltip}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      disabled={props.disabled}>

      {props.isLoading && (renderLoader())}

      {props.icon && (<span>{props.icon}</span>)}
      
      {props.value!=="" && (<span>{props.value}</span>)}
    </button>
  )
}

Button.defaultProps = {
  value: "Submit",
  isLoading: false,
  disabled: false,
  onClick: () => {},
}

export default Button;