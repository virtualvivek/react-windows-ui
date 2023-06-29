import React, { useMemo } from "react";
import { ScrollView } from "../../api";

const Alert = (props) => {

  const _onBackdropPress = (event) => {
    event.preventDefault();
    if(event.target === event.currentTarget) { props.onBackdropPress(); } 
  }

  useMemo(() => {
    props.isVisible ? ScrollView.disableScroll() : ScrollView.enableScroll();
  }, [props.isVisible]);

  return (
    <div
      className={props.isVisible ? "app-alert show" : "app-alert"}
      onClick={(event) => _onBackdropPress(event)}
      tabIndex="-1">
      <div className="app-alert-modal" aria-modal="true" role="dialog">
        {
          (props.title || props.message) && (
            <div className="app-alert-header">
              {props.title && <h1>{props.title}</h1>}
              {props.message && <div className="app-alert-message">{props.message}</div>}
            </div>
          )
        }
        {props.children}
      </div>
    </div>
  )
}

const AlertHeader = ({ children }) => <div className="app-alert-haeder">{children}</div>;
const AlertFooter = ({ children }) => <div className="app-alert-footer">{children}</div>;

Alert.Header = AlertHeader;
Alert.Footer = AlertFooter;

Alert.defaultProps = {
  isVisible: false,
  onBackdropPress: () => {}
}

export default Alert;