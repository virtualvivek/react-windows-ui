import React, { ReactNode } from 'react'

export interface AlertProps {
    isVisible ?: boolean;
    title ?: string;
    message ?: string;
    children ?: ReactNode;
    setTheme ?: string;
    onBackdropPress ?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const Alert: React.SFC<AlertProps>

export default Alert