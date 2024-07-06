import React from "react";

export interface LoaderBusyProps {
  setTheme ?: string;
  isLoading ?: boolean;
  size ?: "small" | "default" | "large";
}
declare const LoaderBusy: React.FC<LoaderBusyProps>;

export default LoaderBusy;