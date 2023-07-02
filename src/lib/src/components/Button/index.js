import React, { useMemo } from "react";
import LoaderBusyWrapper from "../_common/LoaderBusyWrapper";

const Button = (props) => {

  const renderLoader = useMemo(() => {
    return <div className="app-loader-busy loader-sm animate">
              <LoaderBusyWrapper/>
            </div>
  }, []);

  const toggleLoading = useMemo(() => {
    return props.isLoading ? " btn-is-loading" : "";
  }, [props.isLoading]);

  return (
    <button
      className = {
        props.type === "primary" ?  `app-btn app-btn-primary${toggleLoading}`
      : props.type === "danger" ? `app-btn app-btn-danger${toggleLoading}`
      : props.type === "success" ? `app-btn app-btn-success${toggleLoading}`
      : props.type === "subtle" ? `app-btn app-btn-subtle${toggleLoading}`
      : props.type === "primary-outline" ? `app-btn app-btn-outline-primary${toggleLoading}`
      : props.type === "danger-outline" ? `app-btn app-btn-outline-danger${toggleLoading}`
      : props.type === "success-outline" ? `app-btn app-btn-outline-success${toggleLoading}`
      : `app-btn${toggleLoading}`
      }
      style={{
        justifyContent: props.justifyContent,
        width: props.width,
        ...props.style
      }}
      type={props.type}
      title={props.tooltip}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      disabled={props.disabled}
      onDoubleClick={props.onDoubleClick}>
        {props.isLoading && (renderLoader)}
        {props.icon && (<>{props.icon}</>)}
        {props.value && (<span>{props.value}</span>)}
    </button>
  )
}

Button.defaultProps = {
  type: "button",
  disabled: false,
  isLoading: false,
  onClick: () => {},
}

export default Button;