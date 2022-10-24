import React, { useState } from "react";

const View = (props) => {

  const [bgColor, setBgColor] = useState(props.backgroundColor);

  const setHideState = () => {
    return props.collapseOnInvisible ? "destroy" : "";
  }
  const setBgColorDefault = () => {
    props.backgroundColor ? setBgColor(props.backgroundColor) : setBgColor("transparent");
  }
  const setHover = () => {
    props.backgroundColorHover ? setBgColor(props.backgroundColorHover) : setBgColorDefault();
  }
  const setActive = () => {
    props.backgroundColorActive ? setBgColor(props.backgroundColorActive) : setHover();
  }

  return (
    <div
      className = {
        props.isVisible ?
          `app-view-default`
        : `app-view-default hide ${setHideState()}`
        }
        style={{
            zIndex: props.zIndex,
            backgroundColor: bgColor,
            ...props.style
          }}          
          onMouseDown={setActive}
          onMouseUp={setHover}
          onMouseEnter={setHover}
          onClick={props.onClick}
          onMouseLeave={setBgColorDefault}>
        {props.children}
    </div>
  )
}

View.defaultProps = {
  zIndex: 1,
  isVisible: true,
  collapseOnInvisible: true
}

export default View;