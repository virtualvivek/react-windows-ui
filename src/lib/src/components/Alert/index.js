import React from "react";

const Alert = (props) => {

  const setThemeLight = () => {
    return props.setTheme === "system" ? "light" : "";
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
        props.isVisible ? "app-alert show"
                        : "app-alert"
      }
      onClick={(event)=>_onBackdropPress(event)}>
      <div className={`app-alert-modal ${setThemeLight()}`}>
        <h1>{props.title}</h1>
        <div className="alert-message">{props.message}</div>
        <div className="alert-btn-container">
          {props.children}
        </div>
      </div>
    </div>
  )
}

Alert.defaultProps = {
  isVisible: false,
  onBackdropPress: () => {}
}

export default Alert;