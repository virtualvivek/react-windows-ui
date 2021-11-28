import React, { ReactNode } from 'react'

export interface NavBarLinkProps {
  showBadge ?: number | string;
  text ?: string;
  exact ?: boolean;
  to ?: string;
  icon ?: ReactNode;
}
declare const NavBarLink: React.FC<NavBarLinkProps>

export default NavBarLink