import React, { ReactNode } from 'react'

export interface CommandBarButtonProps {
  value ?: boolean;
  icon ?: ReactNode;
  data ?: string[];
  valueDisabled ?: boolean;
  dataDisabled ?: boolean;
  onClick ?: () => void;
}
declare const CommandBarButton: React.FC<CommandBarButtonProps>

export default CommandBarButton