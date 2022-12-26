import React, { useMemo, Children, useLayoutEffect, useState } from "react";
import { ScrollView } from "../../api";

const Alert = (props) => {

  const [isFooter, setFooter] = useState(null);

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

  useLayoutEffect(() => {
    Children.forEach(props.children, child => {
      if (child.type.name === "AlertFooter") {
        setFooter(child);
      }
    });
  }, [props.children]);

  return (
    <div className={props.isVisible ? "app-alert show" : "app-alert"}
      onClick={(event)=>_onBackdropPress(event)}>
      <div className="app-alert-modal" aria-modal="true" role="dialog">
        <div className="app-alert-header">
          <h1>{props.title}</h1>
          <div className="app-alert-message">{props.message}</div>
        </div>
        {isFooter}
      </div>
    </div>
  )
}

const AlertFooter = ({ children }) => <div className="app-alert-footer">{children}</div>;

Alert.Footer = AlertFooter;

Alert.defaultProps = {
  isVisible: false,
  onBackdropPress: () => {}
}

export default Alert;