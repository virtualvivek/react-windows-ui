import React from 'react'

export interface SelectProps {
  data : string[];
  defaultValue ?: string;
  onChange ?: () => void;
  tooltip ?: string;
}
declare const Select: React.FC<SelectProps>

export default Select