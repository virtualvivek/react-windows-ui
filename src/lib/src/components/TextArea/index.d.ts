import React from "react";

export interface TextAreaProps {
  value ?: any;
  disabled ?: boolean;
  onChange ?: Function;
  placeholder ?: string;
}
declare const TextArea: React.FC<TextAreaProps>;

export default TextArea;