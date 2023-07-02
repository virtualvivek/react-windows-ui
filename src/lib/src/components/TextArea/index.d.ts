import React from "react";

export interface TextAreaProps {
  ref ?: any;
  value ?: any;
  tooltip ?: string;
  resizer ?: boolean;
  disabled ?: boolean;
  onChange ?: Function;
  onResize ?: Function;
  placeholder ?: string;
  defaultValue ?: string;
  rows ?: string | number;
  cols ?: string | number;
  resize ?: "both" | "none" | "horizontal" | "vertical";
}
declare const TextArea: React.FC<TextAreaProps>;

export default TextArea;