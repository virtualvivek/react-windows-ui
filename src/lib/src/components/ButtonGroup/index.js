import React, { forwardRef } from "react";

const ButtonGroup = (props, ref) => {

  const {
    children,
    ...otherProps
  } = props;

  return (
    <div
      className="app-btn-group"
      {...otherProps}
      ref={ref}>
      {children}
    </div>
  )
}

export default forwardRef(ButtonGroup);