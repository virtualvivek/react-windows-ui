import React from "react";

export interface InputTextProps {
  key ?: any;
  value ?: any;
  name ?: string;
  label ?: string;
  tooltip ?: string;
  readOnly ?: boolean;
  defaultValue ?: any;
  disabled ?: boolean;
  onClick ?: Function;
  onChange ?: Function;
  onKeyUp ?: Function;
  onFocus ?: Function;
  onInput ?: Function;
  autoFocus ?: boolean;
  onKeyDown ?: Function;
  placeholder ?: string;
  autoCapitalize ?: any;
  clearButton ?: boolean;
  autoComplete ?: string;
  width ?: number | string;
  setStatus ?: "default" | "success" | "danger" | "loading";
  type ?: "text" | "password" | "date" | "time" | "month" | "datetime-local";
}
declare const InputText: React.FC<InputTextProps>;

export default InputText;