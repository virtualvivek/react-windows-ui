import React, { ReactNode, CSSProperties } from "react";

export interface ButtonProps {
  width ?: number | string;
  value ?: string;
  tooltip ?: string;
  icon ?: ReactNode;
  disabled ?: boolean;
  textAlign ?: string;
  isLoading ?: boolean;
  style ?: CSSProperties;

  onClick ?: any;
  onSubmit ?: any;
  onDoubleClick ?: any;

  type ?: "default" | "primary" | "primary-outline" | "success" | "success-outline" | "danger" | "danger-outline" | "subtle";
}
declare const Button: React.FC<ButtonProps>;

export default Button;