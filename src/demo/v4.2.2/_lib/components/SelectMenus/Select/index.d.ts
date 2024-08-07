import React from "react";

export interface SelectProps {
  data : string[];
  tooltip ?: string;
  defaultValue ?: string;
  onChange ?: () => void;
  type ?: "default" | "text";
}
declare const Select: React.FC<SelectProps>;

export default Select;