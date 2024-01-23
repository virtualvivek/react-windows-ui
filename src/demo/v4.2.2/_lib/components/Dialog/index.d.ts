import React, { ReactNode } from "react";

export interface DialogProps {
  ref ?: any;
  isVisible ?: boolean;
  children ?: ReactNode;
  onBackdropPress ?: () => void;
}
declare const Dialog: React.FC<DialogProps>;

export default Dialog;