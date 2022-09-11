import React from "react";
import LoaderBusyWrapper from "../_common/LoaderBusyWrapper";

const Button = (props) => {

  const renderLoader = () => {
    return <div
        className = {
            props.type === "primary" ?  "app-loader-busy loader-sm light animate"
          : props.type === "danger" ? "app-loader-busy loader-sm light animate"
          : props.type === "success" ? "app-loader-busy loader-sm light animate"
          : "app-loader-busy loader-sm animate"
          }>
      <LoaderBusyWrapper/>
    </div>
  }

  const toggleLoading = () => {
    return props.isLoading ? "btn-is-loading" : "btn-no-loading";
  }

  
  return (
    <button
      className = {
        props.type ==="primary" ?  `app-btn animate btn-primary ${toggleLoading()}`
      : props.type ==="danger" ? `app-btn animate btn-danger ${toggleLoading()}`
      : props.type ==="success" ? `app-btn animate btn-success ${toggleLoading()}`
      : props.type ==="primary-outline" ? `app-btn animate btn-primary-outline ${toggleLoading()}`
      : props.type ==="danger-outline" ? `app-btn animate btn-danger-outline ${toggleLoading()}`
      : props.type ==="success-outline" ? `app-btn animate btn-success-outline ${toggleLoading()}`
      : `app-btn animate ${toggleLoading()}`
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