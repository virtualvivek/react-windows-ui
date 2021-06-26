import React, { ReactNode, Component } from 'react'

export interface AlertProps {
    isVisible ?: boolean;
    title ?: string;
    message ?: string;
    children ?: ReactNode;
    setTheme ?: string;
    onBackdropPress ?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const Alert: Component<AlertProps>

export default Alert
