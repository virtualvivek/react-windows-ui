import React, { ReactNode } from "react";

export interface NavBarLinkProps {
  href ?: any;
  text ?: string;
  active ?: boolean;
  onClick ?: Function;
  imgSrc ?: string | any;
  icon ?: ReactNode | any;
  showBadge ?: number | string;
  badgeBackgroundColor ?: string | any;
}
declare const NavBarLink: React.FC<NavBarLinkProps>;

export default NavBarLink;