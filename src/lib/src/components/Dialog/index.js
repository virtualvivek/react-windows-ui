import React, { forwardRef, useState, useImperativeHandle, useMemo } from "react";
import { ScrollView } from "../../api";

const Dialog = forwardRef(({
  style,
  children,
  isVisible = false,
  onBackdropPress = () => {}
}, ref) => {

  const [isVisibLe, setIsVisible] = useState(false);
  const open = () => { setIsVisible(true); }
  const close = () => { setIsVisible(false); }

  const _onBackdropPress = (event) => {
    event.preventDefault();
    if(event.target === event.currentTarget) {
      onBackdropPress();
    }
  }

  useImperativeHandle(ref, () => ({ open, close }));

  useMemo(() => {
    (isVisible || isVisibLe) ? ScrollView.disableScroll() : ScrollView.enableScroll();
  }, [isVisible, isVisibLe]);

  return (
    <div
      className={(isVisible || isVisibLe) ? "ui-dialog show" : "ui-dialog"}
      onClick={(event)=>_onBackdropPress(event)}
      tabIndex="-1"
      ref={ref}>
      <div
        className={"ui-dialog-modal ui-backdrop-blur"}
        style={style}>
        {children}
      </div>
    </div>
  )
});

const DialogBody = (props) => <div className="ui-dialog-body" style={props.style}>{props.children}</div>;
const DialogFooter = (props) => <div className="ui-dialog-footer" style={props.style}>{props.children}</div>;

Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

export default Dialog;