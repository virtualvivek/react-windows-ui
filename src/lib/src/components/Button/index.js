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
    return <div className="ui-loader-busy loader-sm animate">
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
        type === "primary" ?  `ui-btn ui-btn-primary${toggleLoading}`
      : type === "danger" ? `ui-btn ui-btn-danger${toggleLoading}`
      : type === "success" ? `ui-btn ui-btn-success${toggleLoading}`
      : type === "subtle" ? `ui-btn ui-btn-subtle${toggleLoading}`
      : type === "primary-outline" ? `ui-btn ui-btn-outline-primary${toggleLoading}`
      : type === "danger-outline" ? `ui-btn ui-btn-outline-danger${toggleLoading}`
      : type === "success-outline" ? `ui-btn ui-btn-outline-success${toggleLoading}`
      : `ui-btn${toggleLoading}`
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