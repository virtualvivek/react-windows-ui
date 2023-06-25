import React from "react";

export interface CheckboxProps {
  name ?: any;
  value ?: any;
  label ?: string;
  tooltip ?: string;
  disabled ?: boolean;
  onChange ?: Function;
  defaultChecked ?: boolean;
}
declare const Checkbox: React.FC<CheckboxProps>;

export default Checkbox;