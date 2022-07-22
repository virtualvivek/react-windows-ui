import React from 'react'

export interface InputTextProps {
  value ?: any;
  label ?: string;
  tooltip ?: string;
  onChange ?: Function;
  placeholder ?: string;
  width ?: number | string;
  setStatus ?: "default" | "success" | "danger" | "loading";
  type ?: "text" | "password" | "date" | "time" | "month" | "datetime-local";
  disabled ?: boolean;
}
declare const InputText: React.FC<InputTextProps>

export default InputText