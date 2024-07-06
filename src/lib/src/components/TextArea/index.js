import React, { forwardRef } from "react";

const TextArea = forwardRef(({
  rows,
  cols,
  value,
  tooltip,
  resize,
  resizer = true,
  disabled,
  readOnly,
  onChange,
  onResize,
  placeholder = "Enter Here",
  defaultValue,
  ...otherProps
}, ref) => {
  
  return (
    <textarea
      className={
        `ui-textarea` +
        `${resizer ? "" : " resizer-none"}` +
        `${
          resize === "none" ? " resize-none" :
          resize === "horizontal" ? " resize-horizontal" :
          resize === "vertical" ? " resize-vertical" : ""
        }`
      }
      {...otherProps}
      ref={ref}
      rows={rows}
      cols={cols}
      value={value}
      title={tooltip}
      disabled={disabled}
      onChange={onChange}
      onResize={onResize}
      readOnly={readOnly}
      placeholder={placeholder}
      defaultValue={defaultValue}>
    </textarea>
  );
});

export default TextArea;