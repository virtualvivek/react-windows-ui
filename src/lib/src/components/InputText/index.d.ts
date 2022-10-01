import React from 'react'

export interface InputTextProps {
  value ?: any;
  label ?: string;
  tooltip ?: string;
  disabled ?: boolean;
  onClick ?: Function;
  onChange ?: Function;
  placeholder ?: string;
  width ?: number | string;
  setStatus ?: "default" | "success" | "danger" | "loading";
  type ?: "text" | "password" | "date" | "time" | "month" | "datetime-local";
}
declare const InputText: React.FC<InputTextProps>

export default InputText