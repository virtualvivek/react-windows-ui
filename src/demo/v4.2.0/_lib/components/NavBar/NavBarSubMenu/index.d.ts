import React, { ReactNode } from 'react'

export interface NavBarSubMenuProps {
  title ?: string;
  children ?: ReactNode;
}
declare const NavBarSubMenu: React.FC<NavBarSubMenuProps>

export default NavBarSubMenu