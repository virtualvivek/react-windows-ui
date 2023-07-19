import React, { ReactNode } from "react";

export interface CommandBarProps {
  children ?: ReactNode;
  backgroundColor ?: string;
}
declare const CommandBar: React.FC<CommandBarProps>;

export default CommandBar;