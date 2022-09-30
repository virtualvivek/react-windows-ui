import React from "react";

const ColorVariables = (props) => {
  return (
    <>
      <div className="app-hr app-m-0"></div>
      <div className="app-flex app-align-center">
        <span className="demo-colors-name">{props.colorName}<span className="user-select-none">:</span></span>
        <span className="demo-colors-box" style={{backgroundColor: props.backgroundColor}}></span>
        <span className="demo-colors-value">{props.backgroundColor}</span>
      </div>
    </>
  );
}

export default ColorVariables;