import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useOutSideClick } from "../../hooks";
import { getScreenOffset } from "../../api";

const MenuDialog = forwardRef((props, ref) => {

  const {
    children,
    anchorRef,
  } = props;

  const dialogRef = useRef(null);
  const [isShow, setShow] = useState("");
  const [isReverse, setReverse] = useState("");
  useOutSideClick(dialogRef, () =>  setShow(""));

  useImperativeHandle(ref, () => ({
    openDialog: () => {
      if (anchorRef.current) {
        const rect = anchorRef.current.getBoundingClientRect();
        dialogRef.current.style.top = `${rect.bottom+5}px`; // Position below the button
        dialogRef.current.style.left = `${rect.left}px`; // Align with the left of the button
      }
      setShow(" show");
      getScreenOffset(dialogRef) ? setReverse(" reverse") :  setReverse("");
    },
    closeDialog: () => {
      setShow("");
    },
  }));

  return (
    <div ref={dialogRef}
      className={`app-menu-dialog${isShow}${isReverse}`}>
      {children}
    </div>
  );
});

export default MenuDialog;