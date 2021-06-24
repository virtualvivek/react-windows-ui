import React, { ReactNode } from 'react'

export interface ViewProps {
    isVisible ?: boolean;
    zIndex ?: number;
    children ?: ReactNode;
    onClick ?: () => void;
}
declare const View: React.SFC<ViewProps>

export default View