import React from 'react'

export interface InputDateProps {
  placeholder ?: string;
  onChange ?: Function;
  tooltip ?: string;
}
declare const InputDate: React.FC<InputDateProps>

export default InputDate