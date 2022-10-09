import React, { useMemo } from "react";
import { ScrollView } from "../_api";

const Alert = (props) => {

  const _onBackdropPress = (event) => {
    event.preventDefault();
    if(event.target === event.currentTarget) {
      props.onBackdropPress();
    } 
  }

  useMemo(() => {
    if(props.isVisible) { ScrollView.disableScroll(); }
    else {ScrollView.enableScroll(); }
  }, [props.isVisible]);

  return (
    <div className={props.isVisible ? "app-alert show" : "app-alert"}
      onClick={(event)=>_onBackdropPress(event)}>
      <div className="app-alert-modal">
        <h1>{props.title}</h1>
        <div className="app-alert-message">{props.message}</div>
        <div className="app-alert-btn-container">
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