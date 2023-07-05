import React, { ReactNode, CSSProperties } from "react";

export interface ButtonProps {
  ref ?: any;
  type ?: string;
  value ?: string;
  tooltip ?: string;
  icon ?: ReactNode;
  disabled ?: boolean;
  justifyContent ?: CSSProperties;
  isLoading ?: boolean;
  style ?: CSSProperties;
  width ?: number | string;

  onClick ?: any;
  onSubmit ?: any;
  onDoubleClick ?: any;

  type ?: "default" | "primary" | "primary-outline" | "success" | "success-outline" | "danger" | "danger-outline" | "subtle";
}
declare const Button: React.FC<ButtonProps>;

export default Button;