import React, { ReactNode } from 'react'

export interface NavBarLinkUserProps {
    text ?: string;
    img ?: ReactNode;
    imgAlt ?: string;
    exact ?: boolean;
    to ?: string;
}
declare const NavBarLinkUser: React.FC<NavBarLinkUserProps>

export default NavBarLinkUser