import React, { ReactNode } from "react";

export interface ProgressBarProps {
  title ?: string;
  tooltip ?: string;
  icon ?: ReactNode;
  subtitle ?: string;
  showIcon ?: boolean;
  color ?: string | any;
  height ?: number | string;
  setProgress ?: number | string;
}
declare const ProgressBar: React.FC<ProgressBarProps>;

export default ProgressBar;