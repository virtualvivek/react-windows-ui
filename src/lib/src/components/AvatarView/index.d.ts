import React, { ReactNode } from 'react'

export interface AvatarViewProps {
  size ?: any;
  alt ?: string;
  src ?: ReactNode;
  tooltip ?: string;
  objectFit ?: string;
  showBadge ?: boolean | any;
  badgePosition ?: "bottom" | "top";
  badgeBackgroundColor ?: any;
  badgeTooltip ?: string;
  badgeStyle ?: any;
  
  showBackdropShadow ?: boolean;
  onLoad ?: () => void;
  onError ?: () => void;
}
declare const AvatarView: React.FC<AvatarViewProps>

export default AvatarView