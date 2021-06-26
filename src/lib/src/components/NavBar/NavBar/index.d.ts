import React, { ReactNode, Component } from 'react'

export interface NavBarProps {
    title ?: string;
    titleShort ?: string;
    shadowOnScroll ?: boolean;
    mobileHasIcons ?: boolean;
    goBack ?: () => void;
    children ?: ReactNode;
}
declare const NavBar: Component<NavBarProps>

export default NavBar
