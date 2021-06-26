import React, { ReactNode } from 'react'

export interface CommandBarProps {
    position ?: string;
    top ?: number | string;
    margin ?: number | string;
    zIndex ?: number;
    showDropShadow ?: boolean;
    children ?: ReactNode;
}
declare const CommandBar: React.FC<CommandBarProps>

export default CommandBar