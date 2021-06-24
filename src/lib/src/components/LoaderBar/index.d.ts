import React from 'react'

export interface LoaderBarProps {
    isLoading ?: boolean;
    setTheme ?: string;
}
declare const LoaderBar: React.SFC<LoaderBarProps>

export default LoaderBar