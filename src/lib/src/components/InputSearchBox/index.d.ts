import React from 'react'

export interface InputSearchBoxProps {
  placeholder ?: string;
  onChange ?: Function;
  onClick ?: Function;
  disabled ?: boolean;
  tooltip ?: string;
  value ?: any;
  width ?: any;
  name ?: any;
}
declare const InputSearchBox: React.FC<InputSearchBoxProps>

export default InputSearchBox