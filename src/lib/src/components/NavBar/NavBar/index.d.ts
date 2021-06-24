import React, { ReactNode } from 'react'

export interface NavBarProps {
    title ?: string;
    titleShort ?: string;
    shadowOnScroll ?: boolean;
    mobileHasIcons ?: boolean;
    goBack ?: () => void;
    children ?: ReactNode;
}
declare const NavBar: React.SFC<NavBarProps>

export default NavBar