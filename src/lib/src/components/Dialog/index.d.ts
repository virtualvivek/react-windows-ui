import React, { ReactNode,MouseEvent } from 'react'

export interface DialogProps {
  isVisible ?: boolean;
  padding ?: number | string;
  showDropShadow ?: boolean;
  children ?: ReactNode;
  onBackdropPress ?: MouseEvent<any>;
}
declare const Dialog: React.FC<DialogProps>

export default Dialog