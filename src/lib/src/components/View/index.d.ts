import React, { ReactNode, Component } from 'react'

export interface ViewProps {
    isVisible ?: boolean;
    zIndex ?: number;
    children ?: ReactNode;
    onClick ?: () => void;
}
declare const View: Component<ViewProps>

export default View
