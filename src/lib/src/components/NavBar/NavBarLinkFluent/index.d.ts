import React, { ReactNode, Component } from 'react'

export interface NavBarLinkFluentProps {
    showBadge?: number | string;
    text?: string;
    exact?: boolean;
    to?: string;
    icon?: ReactNode;
}
declare const NavBarLinkFluent: Component<NavBarLinkFluentProps>

export default NavBarLinkFluent
