import React, { ReactNode, Component } from 'react'

export interface DialogProps {
    isVisible?: boolean;
    padding?: number | string;
    showDropShadow?: boolean;
    children?: ReactNode;
}
declare const Dialog: Component<DialogProps>

export default Dialog
