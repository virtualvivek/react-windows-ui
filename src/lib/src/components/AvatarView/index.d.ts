import React, { ReactNode } from "react";

export interface AvatarViewProps {
  size ?: any;
  alt ?: string;
  src ?: ReactNode;
  tooltip ?: string;
  objectFit ?: string;
  showBadge ?: boolean | any;
  
  badgeStyle ?: any;
  badgeTooltip ?: string;
  badgeBackgroundColor ?: any;
  badgePosition ?: "bottom" | "top";

  onLoad ?: () => void;
  onError ?: () => void;
  showBackdropShadow ?: boolean;
}
declare const AvatarView: React.FC<AvatarViewProps>;

export default AvatarView;