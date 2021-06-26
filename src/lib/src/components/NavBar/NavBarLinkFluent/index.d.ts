import React, { ReactNode } from 'react'

export interface NavBarLinkFluentProps {
    showBadge ?: number | string;
    text ?: string;
    exact ?: boolean;
    to ?: string;
    icon ?: ReactNode;
}
declare const NavBarLinkFluent: React.FC<NavBarLinkFluentProps>

export default NavBarLinkFluent