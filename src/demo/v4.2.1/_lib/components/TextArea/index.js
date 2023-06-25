import React from "react";

const TextArea = (props) => {
  return (
    <textarea
      className="app-textarea"
      {...props}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      disabled={props.disabled}
      onChange={props.onChange}
      placeholder={props.placeholder}>
    </textarea>
  )
}

TextArea.defaultProps = {
  placeholder: "Input Text Area"
}

export default TextArea;