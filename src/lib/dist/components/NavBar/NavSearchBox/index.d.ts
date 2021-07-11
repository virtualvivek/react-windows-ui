import React, { ReactNode } from 'react'

export interface NavSearchBoxProps {
    placeholder ?: string;
    onChange ?: () => void;
}
declare const NavSearchBox: React.FC<NavSearchBoxProps>

export default NavSearchBox