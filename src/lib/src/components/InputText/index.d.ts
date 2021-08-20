import React from 'react'

export interface InputTextProps {
  width ?: number | string;
  placeholder ?: string;
  label ?: string;
  type ?: string;
  setStatus ?: string;
  tooltip ?: string;
  onChange ?: Function;
  disabled ?: boolean;
}
declare const InputText: React.FC<InputTextProps>

export default InputText