import React, { ReactNode } from 'react'

export interface ProgressBarProps {
  height ?: number | string;
  icon ?: ReactNode;
  showIcon ?: boolean;
  setProgress ?: number | string;
  setStatus ?: string;
  title ?: string;
  subtitle ?: string;
  tooltip ?: string;
}
declare const ProgressBar: React.FC<ProgressBarProps>

export default ProgressBar