import React, { forwardRef, useState, useImperativeHandle, useMemo } from "react";
import { ScrollView } from "../../api";

const Dialog = forwardRef((props, ref) => {

  const [isVisibLe, setIsVisible] = useState(false);
  const open = () => { setIsVisible(true); }
  const close = () => { setIsVisible(false); }

  const _onBackdropPress = (event) => {
    event.preventDefault();
    if(event.target === event.currentTarget) {
      props.onBackdropPress();
    }
  }

  useImperativeHandle(ref, () => ({ open, close }));

  useMemo(() => {
    (props.isVisible || isVisibLe) ? ScrollView.disableScroll() : ScrollView.enableScroll();
  }, [props.isVisible, isVisibLe]);

  return (
    <div
      className={(props.isVisible || isVisibLe) ? "ui-dialog show" : "ui-dialog"}
      onClick={(event)=>_onBackdropPress(event)}
      tabIndex="-1"
      ref={ref}>
      <div
        className={"ui-dialog-modal"}
        style={props.style}>
        {props.children}
      </div>
    </div>
  )
});

const DialogHeader = (props) => <div className="ui-dialog-header" style={props.style}>{props.children}</div>;
const DialogBody = (props) => <div className="ui-dialog-body" style={props.style}>{props.children}</div>;
const DialogFooter = (props) => <div className="ui-dialog-footer" style={props.style}>{props.children}</div>;

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

Dialog.defaultProps = {
  isVisible: false,
  onBackdropPress: () => {}
}

export default Dialog;