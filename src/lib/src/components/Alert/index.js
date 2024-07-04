import React, { forwardRef, useMemo, useState, useImperativeHandle } from "react";
import { ScrollView } from "../../api";

const Alert = forwardRef((props, ref) => {
  const {
    title,
    message,
    children,
    isVisible
  } = props;

  const [isVisibLe, setIsVisible] = useState(false);
  const open = () => { setIsVisible(true); }
  const close = () => { setIsVisible(false); }

  useImperativeHandle(ref, () => ({ open, close }));

  const _onBackdropPress = (event) => {
    event.preventDefault();
    if(event.target === event.currentTarget) { props.onBackdropPress(); } 
  }

  useMemo(() => {
    (isVisible || isVisibLe) ? ScrollView.disableScroll() : ScrollView.enableScroll();
  }, [isVisible, isVisibLe]);

  return (
    <div
      ref={ref}
      tabIndex="-1"
      onClick={(event) => _onBackdropPress(event)}
      className={(isVisible || isVisibLe) ? "ui-alert show" : "ui-alert"}>
      <div className="ui-alert-modal" aria-modal="true" role="dialog">
        {
          (title || message) && (
            <div className="ui-alert-header">
              {title && <h1>{title}</h1>}
              {message && <div className="ui-alert-message">{message}</div>}
            </div>
          )
        }
        {children}
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