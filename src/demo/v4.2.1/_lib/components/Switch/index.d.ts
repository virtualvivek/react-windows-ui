import React from 'react'

export interface SwitchProps {
  defaultChecked ?: boolean;
  disabled ?: boolean;
  labelOn ?: string;
  labelOff ?: string;
  label ?: boolean;
  tooltip ?: string;
  onChange ?: () => void;
  labelPosition ?: "start" | "end";
  labelFixedWidth ?: number | string;
}
declare const Switch: React.FC<SwitchProps>

export default Switch