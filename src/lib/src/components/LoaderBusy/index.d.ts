import React from 'react'

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
declare const LoaderBusy: React.SFC<LoaderBusyProps>

export default LoaderBusy