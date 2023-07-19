import React from "react";

export interface LoaderBusyProps {
  size ?: string;
  title ?: string;
  setTheme ?: string;
  isLoading ?: boolean;
  backgroundColor ?: string;
  onBackdropPress ?: Function;
  display ?: "default" | "overlay";
}
declare const LoaderBusy: React.FC<LoaderBusyProps>;

export default LoaderBusy;