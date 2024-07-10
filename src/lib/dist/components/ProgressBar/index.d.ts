import React from "react";

export interface ProgressBarProps {
  tooltip ?: string;
  color ?: string | any;
  height ?: number | string;
  width ?: number | string;
  setProgress ?: number | "hidden" | "indeterminate";
}
declare const ProgressBar: React.FC<ProgressBarProps>;

export default ProgressBar;