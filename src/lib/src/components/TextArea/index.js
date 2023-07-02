import React, { forwardRef } from "react";

const TextArea = (props, ref) => {
  return (
    <textarea
      className={
        `app-textarea`+
        `${props.resizer ? "" : " resizer-none"}`+
        `${
          props.resize === "none" ? " resize-none" :
          props.resize === "horizontal" ? " resize-horizontal" :
          props.resize === "vertical" ? " resize-vertical" : ""
        }`
      }
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