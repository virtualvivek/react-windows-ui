import React, { forwardRef, useMemo } from "react";
import LoaderBusyWrapper from "../_common/LoaderBusyWrapper";

const Button = forwardRef((props, ref) => {

  const {
    type,
    icon,
    value,
    tooltip,
    onClick,
    onSubmit,
    disabled,
    isLoading,
    onDoubleClick,
  } = props;

  const renderLoader = useMemo(() => {
    return <div className="app-loader-busy loader-sm animate">
              <LoaderBusyWrapper/>
            </div>
  }, []);

  const toggleLoading = useMemo(() => {
    return isLoading ? " btn-is-loading" : "";
  }, [isLoading]);

  return (
    <button
      ref={ref}
      className = {
        type === "primary" ?  `app-btn app-btn-primary${toggleLoading}`
      : type === "danger" ? `app-btn app-btn-danger${toggleLoading}`
      : type === "success" ? `app-btn app-btn-success${toggleLoading}`
      : type === "subtle" ? `app-btn app-btn-subtle${toggleLoading}`
      : type === "primary-outline" ? `app-btn app-btn-outline-primary${toggleLoading}`
      : type === "danger-outline" ? `app-btn app-btn-outline-danger${toggleLoading}`
      : type === "success-outline" ? `app-btn app-btn-outline-success${toggleLoading}`
      : `app-btn${toggleLoading}`
      }
      style={{
        justifyContent: props.justifyContent,
        width: props.width,
        ...props.style
      }}
      type={type}
      title={tooltip}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      onDoubleClick={onDoubleClick}>
        {isLoading && (renderLoader)}
        {icon && (<>{icon}</>)}
        {value && (<span>{value}</span>)}
    </button>
  )
});

Button.defaultProps = {
  type: "button",
  disabled: false,
  isLoading: false,
  onClick: () => {},
}

export default Button;