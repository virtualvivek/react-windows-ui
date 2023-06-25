import React, { ReactNode } from "react";

export interface NavBarLinkProps {
  to ?: string;
  text ?: string;
  exact ?: boolean;
  imgSrc ?: string | any;
  icon ?: ReactNode | any;
  showBadge ?: number | string;
  badgeBackgroundColor ?: string | any;
}
declare const NavBarLink: React.FC<NavBarLinkProps>;

export default NavBarLink;