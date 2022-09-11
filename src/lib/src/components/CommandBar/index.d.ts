import React, { ReactNode } from 'react'

export interface CommandBarProps {
  backgroundColor ?: string;
  children ?: ReactNode;
}
declare const CommandBar: React.FC<CommandBarProps>

export default CommandBar