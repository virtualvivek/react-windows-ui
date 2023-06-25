import React from "react";

export interface LoaderBarProps {
  setTheme ?: string;
  isLoading ?: boolean;
}
declare const LoaderBar: React.FC<LoaderBarProps>;

export default LoaderBar;