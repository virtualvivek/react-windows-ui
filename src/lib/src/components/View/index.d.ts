import React, { ReactNode, FC } from 'react'

export interface ViewProps {
    isVisible ?: boolean;
    zIndex ?: number;
    children ?: ReactNode;
    onClick ?: () => void;
}
declare const View: FC<ViewProps>

export default View