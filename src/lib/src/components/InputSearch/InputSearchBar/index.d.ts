import React from 'react'

export interface InputSearchBarProps {
  placeholder ?: string;
  onSubmit ?: Function;
  onChange ?: Function;
  onClick ?: Function;
  disabled ?: boolean;
  tooltip ?: string;
  value ?: any;
  width ?: any;
  name ?: any;
}
declare const InputSearchBar: React.FC<InputSearchBarProps>

export default InputSearchBar