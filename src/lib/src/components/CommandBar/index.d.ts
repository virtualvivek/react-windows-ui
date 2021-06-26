import React, { ReactNode, Component } from 'react'

export interface CommandBarProps {
    position ?: string;
    top ?: number | string;
    margin ?: number | string;
    zIndex ?: number;
    showDropShadow ?: boolean;
    children ?: ReactNode;
}
declare const CommandBar: Component<CommandBarProps>

export default CommandBar
