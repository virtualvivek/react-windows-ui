import React from "react";

const Dialog = (props) => {

  const isDropShadow = () => {
    return props.showDropShadow ? "dropShadow" : "";
  }

  const _onBackdropPress = (event) => {
    event.preventDefault();
    if(event.target === event.currentTarget) {
      props.onBackdropPress();
    } 
  }

  return (
    <div
      className={
        props.isVisible ? "app-dialog show"
                        : "app-dialog"
      }
      onClick={(event)=>_onBackdropPress(event)}>
      <div
        class={`app-dialog-modal ${isDropShadow()}`}
        style={props.style}>
        {props.children}
      </div>  
    </div>
  )
}

Dialog.defaultProps = {
  isVisible: false,
  onBackdropPress: () => {}
}

export default Dialog;