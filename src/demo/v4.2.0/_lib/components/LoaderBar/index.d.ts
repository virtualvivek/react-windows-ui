import React from 'react'

export interface LoaderBarProps {
  isLoading ?: boolean;
  setTheme ?: string;
}
declare const LoaderBar: React.FC<LoaderBarProps>

export default LoaderBar