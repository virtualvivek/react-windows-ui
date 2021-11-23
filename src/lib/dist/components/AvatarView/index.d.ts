import React, { ReactNode } from 'react'

export interface AvatarViewProps {
  width ?: number | string;
  height ?: number | string;
  size ?: "small" | "medium" | "large";
  isLoading ?: boolean;
  objectFit ?: string;
  showBackdropShadow ?: boolean;
  tooltip ?: string;
  alt ?: string;
  src ?: ReactNode;
  onLoad ?: () => void;
}
declare const AvatarView: React.FC<AvatarViewProps>

export default AvatarView