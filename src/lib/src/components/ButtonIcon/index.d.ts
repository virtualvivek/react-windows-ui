import React, { ReactNode } from 'react'

export interface ButtonIconProps {
    width ?: number | string;
    height ?: number | string;
    tooltip ?: string;
    iconSize ?: number | string;
    disabled ?: boolean;
    icon ?: ReactNode;
    onClick ?: Function
}
declare const ButtonIcon: React.SFC<ButtonIconProps>

export default ButtonIcon