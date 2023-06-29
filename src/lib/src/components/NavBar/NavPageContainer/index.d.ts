import React, { ReactNode } from "react";

export interface NavPageContainerProps {
  hasPadding ?: boolean;
  overscroll ?: boolean;
  children ?: ReactNode;
  animateTransition ?: boolean;
}
declare const NavPageContainer: React.FC<NavPageContainerProps>;

export default NavPageContainer;