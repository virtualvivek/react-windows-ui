import React, { ReactNode } from 'react'

export interface ViewProps {
  isVisible ?: boolean;
  zIndex ?: number;
  children ?: ReactNode;
  onClick ?: () => void;
  backgroundColor ?: any;
  backgroundColorHover ?: any;
  backgroundColorActive ?: any;
  animationType ?: "none" | "fade";
}
declare const View: React.FC<ViewProps>

export default View