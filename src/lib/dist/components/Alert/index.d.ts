import React, { ReactNode } from "react";

export interface AlertProps {
  ref ?: any;
  title ?: string;
  message ?: string;
  isVisible ?: boolean;
  children ?: ReactNode;
  backdropBlur ?: boolean;
  onBackdropPress ?: () => void;
}
declare const Alert: React.FC<AlertProps>;

export default Alert;