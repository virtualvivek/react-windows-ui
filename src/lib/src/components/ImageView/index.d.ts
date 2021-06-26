import React, { ReactNode, Component } from 'react'

export interface ImageViewProps {
    width?: number | string;
    height ?: number | string;
    padding ?: number | string;
    margin ?: number | string;
    borderRadius ?: number | string;
    src ?: ReactNode;
    isLoading ?: boolean;
    insetShadow ?: boolean;
    onLoad ?: Function;
    alt ?: string;
    objectFit ?: string;
    title ?: string;
    subtitle ?: string;
    tooltip ?: string;
}
declare const ImageView: Component<ImageViewProps>

export default ImageView
