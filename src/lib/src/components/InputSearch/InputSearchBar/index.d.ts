import React from "react";

export interface InputSearchBarProps {
  name ?: any;
  value ?: any;
  width ?: any;
  tooltip ?: string;
  disabled ?: boolean;
  onClick ?: Function;
  onKeyUp ?: Function;
  onSubmit ?: Function;
  onChange ?: Function;
  onKeyDown ?: Function;
  placeholder ?: string;
}
declare const InputSearchBar: React.FC<InputSearchBarProps>;

export default InputSearchBar;