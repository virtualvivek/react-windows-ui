import React from 'react'

export interface SelectTextProps {
  data : string[];
  defaultValue ?: string;
  onChange ?: () => void;
}
declare const SelectText: React.FC<SelectTextProps>

export default SelectText