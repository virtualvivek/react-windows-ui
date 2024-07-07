import React, { ReactNode } from "react";

export interface SelectProps {
  data : string[];
  tooltip ?: string;
  defaultValue ?: string;
  onChange ?: () => void;
  trigger ?: ReactNode;
}
declare const Select: React.FC<SelectProps>;

export default Select;