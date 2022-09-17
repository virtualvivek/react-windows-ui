import React from 'react'

export interface RadioButtonProps {
  value ?: any;
  name ?: string;
  label ?: string;
  tooltip ?: string;
  disabled ?: boolean;
  defaultChecked ?: boolean;
  onChange ?: () => void;
}
declare const RadioButton: React.FC<RadioButtonProps>

export default RadioButton