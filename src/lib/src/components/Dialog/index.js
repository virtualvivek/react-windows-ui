import React, { useState, useEffect, Children } from "react";

const Dialog = (props) => {

  const [isHeader, setHeader] = useState(null);
  const [isBody, setBody] = useState(null);
  const [isFooter, setFooter] = useState(null);

  const isDropShadow = () => {
    return props.showDropShadow ? "dropShadow" : "";
  }

  const _onBackdropPress = (event) => {
    event.preventDefault();
    if(event.target === event.currentTarget) {
      props.onBackdropPress();
    }
  }

  useEffect(() => {
    Children.forEach(props.children, child => {
      if (child.type.name === "DialogHeader") {
        setHeader(child);
      }
      else if (child.type.name === "DialogBody") {
        setBody(child);
      }
      else if (child.type.name === "DialogFooter") {
        setFooter(child);
      }
    });
  }, [props.children]);

  return (
    <div
      className={
        props.isVisible ? "app-dialog show"
                        : "app-dialog"
      }
      onClick={(event)=>_onBackdropPress(event)}>
      <div
        className={`app-dialog-modal ${isDropShadow()}`}
        style={props.style}>
        {isHeader}
        {isBody}
        {isFooter}
      </div>
    </div>
  )
}

const DialogHeader = ({ children }) => <div className="app-dialog-header">{children}</div>;
const DialogBody = ({ children }) => <div className="app-dialog-body">{children}</div>;
const DialogFooter = ({ children }) => <div className="app-dialog-footer">{children}</div>;

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

Dialog.defaultProps = {
  isVisible: false,
  onBackdropPress: () => {}
}

export default Dialog;