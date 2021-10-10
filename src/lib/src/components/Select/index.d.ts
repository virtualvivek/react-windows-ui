import React from 'react'

export interface SelectProps {
  data : string[];
  defaultValue ?: string;
  onChange ?: () => void;
}
declare const Select: React.FC<SelectProps>

export default Select