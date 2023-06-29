import React from "react";

export interface InputSearchBoxProps {
  name ?: any;
  value ?: any;
  width ?: any;
  tooltip ?: string;
  disabled ?: boolean;
  onClick ?: Function;
  onKeyUp ?: Function;
  onChange ?: Function;
  onKeyDown ?: Function;
  placeholder ?: string;
}

declare const InputSearchBox: React.FC<InputSearchBoxProps>;

export default InputSearchBox;