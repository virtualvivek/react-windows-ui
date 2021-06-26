import React, { ReactNode, Component } from 'react'

export interface NavPageContainerProps {
    animateTransition ?: boolean;
    hasPadding ?: boolean;
    children ?: ReactNode;
}
declare const NavPageContainer: Component<NavPageContainerProps>

export default NavPageContainer
