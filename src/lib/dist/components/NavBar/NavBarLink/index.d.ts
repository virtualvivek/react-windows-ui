import React, { ReactNode } from 'react'

export interface NavBarLinkProps {
  showBadge ?: number | string;
  imgSrc ?: string | any;
  text ?: string;
  exact ?: boolean;
  to ?: string;
  icon ?: ReactNode | any;
}
declare const NavBarLink: React.FC<NavBarLinkProps>

export default NavBarLink