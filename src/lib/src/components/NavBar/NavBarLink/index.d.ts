import React, { ReactNode, Component } from 'react'

export interface NavBarLinkProps {
    showBadge?: number | string;
    text?: string;
    exact?: boolean;
    to?: string;
    icon?: ReactNode;
}
declare const NavBarLink: Component<NavBarLinkProps>

export default NavBarLink
