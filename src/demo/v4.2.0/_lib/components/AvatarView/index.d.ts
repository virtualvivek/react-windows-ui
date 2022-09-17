import React, { ReactNode } from 'react'

export interface AvatarViewProps {
  alt ?: string;
  src ?: ReactNode;
  tooltip ?: string;
  objectFit ?: string;
  isLoading ?: boolean;
  width ?: number | string;
  height ?: number | string;
  showBackdropShadow ?: boolean;
  size ?: "small" | "medium" | "large";
  onLoad ?: () => void;
}
declare const AvatarView: React.FC<AvatarViewProps>

export default AvatarView