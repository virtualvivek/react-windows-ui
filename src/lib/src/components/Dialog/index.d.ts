import React, { ReactNode } from "react";

export interface DialogProps {
  ref ?: any;
  isVisible ?: boolean;
  children ?: ReactNode;
  backdropBlur ?: boolean;
  onBackdropPress ?: () => void;
}
declare const Dialog: React.FC<DialogProps>;

export default Dialog;