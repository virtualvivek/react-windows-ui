import React, { ReactNode, CSSProperties } from 'react'

export interface ButtonProps {
  width ?: number | string;
  value ?: string;
  disabled ?: boolean;
  tooltip ?: string;
  isLoading ?: boolean;
  icon ?: ReactNode;
  textAlign ?: string;
  type ?: "default" | "primary" | "primary-outline" | "success" | "success-outline" | "danger" | "danger-outline";
  onSubmit ?: Function;
  onClick ?: Function;
  style ?: CSSProperties;
}
declare const Button: React.FC<ButtonProps>

export default Button