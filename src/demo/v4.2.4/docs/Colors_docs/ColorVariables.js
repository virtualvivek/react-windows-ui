import React from "react";

const ColorVariables = (props) => {
  return (
    <>
      <td><p className="ui-code">{props.colorName}</p></td>
      <td>
        <span className="demo-colors-box" style={{backgroundColor: props.colorLight}}></span>
        <span className="demo-colors-value">{props.colorLight}</span>
      </td>
      <td>
        <span className="demo-colors-box" style={{backgroundColor: props.colorDark}}></span>
        <span className="demo-colors-value">{props.colorDark}</span>
      </td>
    </>
  );
}

export default ColorVariables;