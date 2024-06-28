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
      if (anchorRef.current && dialogRef.current) {
        const rect = anchorRef.current.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
        dialogRef.current.style.top = `${rect.bottom + scrollTop + 5}px`; // Adjusted for vertical scroll
        dialogRef.current.style.left = `${rect.left + scrollLeft}px`; // Adjusted for horizontal scroll

        setShow(" show");
        getScreenOffset(dialogRef) ? setReverse(" reverse") : setReverse("");
      } else {
        console.error("anchorRef or ref should not be empty for MenuBar.Dialog");
      }
    },
    closeDialog: () => {
      setShow("");
    },
  }));

  return (
    <div ref={dialogRef}
      className={`ui-menu-dialog${isShow}${isReverse}`}>
      {children}
    </div>
  );
});

export default MenuDialog;