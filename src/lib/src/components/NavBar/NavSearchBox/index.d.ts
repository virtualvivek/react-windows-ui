import React, { ReactNode } from 'react'

export interface NavSearchBoxProps {
    placeholder ?: string;
    onChange ?: () => void;
}
declare const NavSearchBox: React.SFC<NavSearchBoxProps>

export default NavSearchBox