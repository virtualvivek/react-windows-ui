import React, { ReactNode } from 'react'

export interface NavBarProps {
    title ?: string;
    titleShort ?: string;
    shadowOnScroll ?: boolean;
    mobileHasIcons ?: boolean;
    showThemeSwitch ?: boolean;
    goBack ?: () => void;
    children ?: ReactNode;
}
declare const NavBar: React.FC<NavBarProps>

export default NavBar