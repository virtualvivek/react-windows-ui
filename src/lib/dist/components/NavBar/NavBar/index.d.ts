import React, { ReactNode } from 'react'

export interface NavBarProps {
  title ?: string;
  shadowOnScroll ?: boolean;
  collapsed ?: boolean;
  titleBarMobile ?: ReactNode;
  goBack ?: () => void;
  children ?: ReactNode;
}
declare const NavBar: React.FC<NavBarProps>

export default NavBar