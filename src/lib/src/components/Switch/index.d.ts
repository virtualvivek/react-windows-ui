import React from "react";

export interface SwitchProps {
  ref ?: any;
  label ?: boolean;
  tooltip ?: string;
  labelOn ?: string;
  labelOff ?: string;
  disabled ?: boolean;
  onChange ?: () => void;
  defaultChecked ?: boolean;
  labelPosition ?: "start" | "end";
  labelFixedWidth ?: number | string;
}
declare const Switch: React.FC<SwitchProps>;

export default Switch;