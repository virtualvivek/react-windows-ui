import React from 'react'

export interface SelectTextProps {
  data : string[];
  defaultValue ?: string;
  onChange ?: () => void;
  tooltip ?: string;
}
declare const SelectText: React.FC<SelectTextProps>

export default SelectText