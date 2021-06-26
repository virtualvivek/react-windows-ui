import React, { ReactNode, Component } from 'react'

export interface NavBarLinkUserProps {
    text?: string;
    img?: ReactNode;
    imgAlt?: string;
    exact?: boolean;
    to?: string;
}
declare const NavBarLinkUser: Component<NavBarLinkUserProps>

export default NavBarLinkUser
