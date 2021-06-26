import React, { ReactNode, Component } from 'react'

export interface ButtonIconProps {
    width?: number | string;
    height?: number | string;
    tooltip?: string;
    iconSize?: number | string;
    disabled?: boolean;
    icon?: ReactNode;
    onClick?: Function
}
declare const ButtonIcon: Component<ButtonIconProps>

export default ButtonIcon
