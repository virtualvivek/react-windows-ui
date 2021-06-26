import React, { ReactNode, Component } from 'react'

export interface NavSearchBoxProps {
    placeholder ?: string;
    onChange ?: () => void;
}
declare const NavSearchBox: Component<NavSearchBoxProps>

export default NavSearchBox
