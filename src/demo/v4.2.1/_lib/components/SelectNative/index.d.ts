import React from 'react'

export interface SelectNativeProps {
  data : string[];
  name ?: any;
  tooltip ?: string;
}
declare const SelectNative: React.FC<SelectNativeProps>

export default SelectNative