import React, { ReactNode } from 'react'

export interface NavBarLinkProps {
    showBadge ?: number | string;
    text ?: string;
    exact ?: boolean;
    to ?: string;
    icon ?: ReactNode;
}
declare const NavBarLink: React.SFC<NavBarLinkProps>

export default NavBarLink