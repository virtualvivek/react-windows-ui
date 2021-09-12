import React from 'react'

export interface InputTextProps {
  value ?: any;
  width ?: number | string;
  placeholder ?: string;
  label ?: string;
  type ?: "text" | "password" | "date" | "time" | "month" | "datetime-local";
  setStatus ?: "default" | "success" | "danger" | "loading";
  tooltip ?: string;
  onChange ?: Function;
  disabled ?: boolean;
}
declare const InputText: React.FC<InputTextProps>

export default InputText