import React, { ReactNode, Component } from 'react'

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
declare const ProgressBar: Component<ProgressBarProps>

export default ProgressBar
