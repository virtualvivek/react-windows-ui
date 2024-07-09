import React, { ReactNode } from "react";

export interface SelectProps {
  data : string[];
  tooltip ?: string;
  trigger ?: ReactNode;
  defaultValue ?: string;
  onChange ?: () => void;
  backdropBlur ?: boolean;
}
declare const Select: React.FC<SelectProps>;

export default Select;