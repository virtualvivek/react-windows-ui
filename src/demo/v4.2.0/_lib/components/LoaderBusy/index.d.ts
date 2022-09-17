import React from 'react'

export interface LoaderBusyProps {
  size ?: string;
  setTheme ?: string;
  isLoading ?: boolean;
  backgroundColor ?: string;
  onBackdropPress ?: Function;
  display ?: string;
  title ?: string;
}
declare const LoaderBusy: React.FC<LoaderBusyProps>

export default LoaderBusy