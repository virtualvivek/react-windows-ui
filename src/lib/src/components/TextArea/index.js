import React, { forwardRef } from "react";

const TextArea = (props, ref) => {

  const {
    resize,
    resizer,
    ...otherProps
  } = props;

  return (
    <textarea
      className={
        `app-textarea`+
        `${resizer ? "" : " resizer-none"}`+
        `${
          resize === "none" ? " resize-none" :
          resize === "horizontal" ? " resize-horizontal" :
          resize === "vertical" ? " resize-vertical" : ""
        }`
      }
      {...otherProps}
      ref={ref}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      title={props.tooltip}
      disabled={props.disabled}
      onChange={props.onChange}
      onResize={props.onResize}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}>
    </textarea>
  )
}

export default forwardRef(TextArea);

TextArea.defaultProps = {
  resizer: true,
  placeholder: "Enter Here"
}