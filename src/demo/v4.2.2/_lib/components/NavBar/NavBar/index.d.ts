import React, { ReactNode } from "react";

export interface NavBarProps {
  title ?: string;
  collapsed ?: boolean;
  goBack ?: () => void;
  children ?: ReactNode;
  shadowOnScroll ?: boolean;
  titleBarMobile ?: ReactNode;
}
declare const NavBar: React.FC<NavBarProps>;

export default NavBar;