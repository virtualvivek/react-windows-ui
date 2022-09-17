import React, { ReactNode } from 'react'

export interface ViewProps {
  isVisible ?: boolean;
  zIndex ?: number;
  children ?: ReactNode;
  onClick ?: () => void;
  animationType ?: "none" | "fade";
}
declare const View: React.FC<ViewProps>

export default View