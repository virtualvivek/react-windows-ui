import React from "react";

const TextArea = (props) => {
  return (
    <textarea
      className="app-textarea"
      {...props}
      rows={props.rows}
      cols={props.cols}
      placeholder={props.placeholder}>
    </textarea>
  )
}

TextArea.defaultProps = {
  rows: 1,
  cols: 2,
  placeholder: "Input TextArea"
}

export default TextArea;