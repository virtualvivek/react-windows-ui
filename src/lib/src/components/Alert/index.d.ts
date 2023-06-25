import React, { ReactNode } from "react";

export interface AlertProps {
  title ?: string;
  message ?: string;
  isVisible ?: boolean;
  children ?: ReactNode;
  onBackdropPress ?: () => void;
}
declare const Alert: React.FC<AlertProps>;

export default Alert;