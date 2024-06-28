import React, { forwardRef, useMemo, useState, useImperativeHandle } from "react";
import { ScrollView } from "../../api";

const Alert = forwardRef((props, ref) => {

  const [isVisible, setIsVisible] = useState(false);
  const open = () => { setIsVisible(true); }
  const close = () => { setIsVisible(false); }

  useImperativeHandle(ref, () => ({ open, close }));

  const _onBackdropPress = (event) => {
    event.preventDefault();
    if(event.target === event.currentTarget) { props.onBackdropPress(); } 
  }

  useMemo(() => {
    (props.isVisible || isVisible) ? ScrollView.disableScroll() : ScrollView.enableScroll();
  }, [props.isVisible, isVisible]);

  return (
    <div
      className={(props.isVisible || isVisible) ? "ui-alert show" : "ui-alert"}
      onClick={(event) => _onBackdropPress(event)}
      tabIndex="-1"
      ref={ref}>
      <div className="ui-alert-modal" aria-modal="true" role="dialog">
        {
          (props.title || props.message) && (
            <div className="ui-alert-header">
              {props.title && <h1>{props.title}</h1>}
              {props.message && <div className="ui-alert-message">{props.message}</div>}
            </div>
          )
        }
        {props.children}
      </div>
    </div>
  )
});

const AlertHeader = ({ children }) => <div className="ui-alert-haeder">{children}</div>;
const AlertFooter = ({ children }) => <div className="ui-alert-footer">{children}</div>;

Alert.Header = AlertHeader;
Alert.Footer = AlertFooter;

Alert.defaultProps = {
  isVisible: false,
  onBackdropPress: () => {}
}

export default Alert;