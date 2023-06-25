import React from "react";

const Dialog = (props) => {

  const _onBackdropPress = (event) => {
    event.preventDefault();
    if(event.target === event.currentTarget) {
      props.onBackdropPress();
    }
  }

  return (
    <div
      className={props.isVisible ? "app-dialog show" : "app-dialog"}
      onClick={(event)=>_onBackdropPress(event)}>
      <div
        className={"app-dialog-modal"}
        style={props.style}>
        {props.children}
      </div>
    </div>
  )
}

const DialogHeader = (props) => <div className="app-dialog-header" style={props.style}>{props.children}</div>;
const DialogBody = (props) => <div className="app-dialog-body" style={props.style}>{props.children}</div>;
const DialogFooter = (props) => <div className="app-dialog-footer" style={props.style}>{props.children}</div>;

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

Dialog.defaultProps = {
  isVisible: false,
  onBackdropPress: () => {}
}

export default Dialog;