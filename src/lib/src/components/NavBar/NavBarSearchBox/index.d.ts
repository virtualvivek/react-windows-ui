import React from 'react'

export interface NavBarSearchBoxProps {
  placeholder ?: string;
  onChange ?: () => void;
}
declare const NavBarSearchBox: React.FC<NavBarSearchBoxProps>

export default NavBarSearchBox