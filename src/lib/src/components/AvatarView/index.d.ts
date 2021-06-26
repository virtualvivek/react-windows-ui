import React, { ReactNode } from 'react'

export interface AvatarViewProps {
    width ?: number | string;
    height ?: number | string;
    size ?: string;
    isLoading ?: boolean;
    objectFit ?: string;
    showBackdropShadow ?: boolean;
    tooltip ?: string;
    alt ?: string;
    src ?: ReactNode;
    onLoad ?: Function;
}
declare const AvatarView: React.FC<AvatarViewProps>

export default AvatarView