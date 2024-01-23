import React from "react";

export interface ProgressBarProps {
  title ?: string;
  tooltip ?: string;
  subtitle ?: string;
  color ?: string | any;
  height ?: number | string;
  setProgress ?: number | "hidden" | "indeterminate";
}
declare const ProgressBar: React.FC<ProgressBarProps>;

export default ProgressBar;