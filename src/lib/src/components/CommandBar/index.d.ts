import React, { ReactNode } from 'react'

export interface CommandBarProps {
  zIndex ?: number;
  position ?: string;
  top ?: number | string;
  margin ?: number | string;
  showDropShadow ?: boolean;
  children ?: ReactNode;
}
declare const CommandBar: React.FC<CommandBarProps>

export default CommandBar