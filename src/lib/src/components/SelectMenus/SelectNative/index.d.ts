import React from "react";

export interface SelectNativeProps {
  name ?: any;
  data : string[];
  tooltip ?: string;
  disabled ?: boolean;
  onChange ?: Function;
}
declare const SelectNative: React.FC<SelectNativeProps>;

export default SelectNative;