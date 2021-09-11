import React from 'react'

export interface InputSearchBarProps {
  placeholder ?: string;
  onSubmit ?: Function;
  tooltip ?: string;
  value ?: any;
  name ?: any;
}
declare const InputSearchBar: React.FC<InputSearchBarProps>

export default InputSearchBar