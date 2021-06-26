import React, { ReactNode, Component } from 'react'

export interface ButtonProps {
    width?: number | string;
    value?: string;
    disabled?: boolean;
    tooltip?: string;
    isLoading?: boolean;
    icon?: ReactNode;
    textAlign?: string;
    type?: string;
    onSubmit?: Function;
    onClick?: Function;
}
declare const Button: Component<ButtonProps>

export default Button
