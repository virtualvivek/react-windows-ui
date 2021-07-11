import React, { FC } from 'react'

export interface LoaderBusyProps {
    size ?: string;
    setTheme ?: string;
    isLoading ?: boolean;
    isVisible ?: boolean;
    backgroundColor ?: string;
    onBackdropPress ?: Function;
    display ?: string;
    title ?: string;
}
declare const LoaderBusy: FC<LoaderBusyProps>

export default LoaderBusy