import React from 'react'

export interface CheckboxProps {
  label ?: string;
  disabled ?: boolean;
  defaultChecked ?: boolean;
  tooltip ?: string;
  onChange ?: Function;
  name ?: any;
  value ?: any;
}
declare const Checkbox: React.FC<CheckboxProps>

export default Checkbox