import React, { ReactNode } from 'react'

export interface AvatarViewProps {
  size ?: any;
  alt ?: string;
  src ?: ReactNode;
  tooltip ?: string;
  objectFit ?: string;
  width ?: number | string;
  height ?: number | string;
  showBadge ?: boolean | any;
  
  showBackdropShadow ?: boolean;
  onLoad ?: () => void;
  onError ?: () => void;
}
declare const AvatarView: React.FC<AvatarViewProps>

export default AvatarView