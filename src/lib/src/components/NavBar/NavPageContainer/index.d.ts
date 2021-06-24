import React, { ReactNode } from 'react'

export interface NavPageContainerProps {
    animateTransition ?: boolean;
    hasPadding ?: boolean;
    children ?: ReactNode;
}
declare const NavPageContainer: React.SFC<NavPageContainerProps>

export default NavPageContainer