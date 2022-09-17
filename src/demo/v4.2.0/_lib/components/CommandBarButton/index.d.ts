import React, { ReactNode } from 'react'

export interface CommandBarButtonProps {
  data ?: string[];
  value ?: boolean;
  icon ?: ReactNode;
  onClick ?: () => void;
  dataDisabled ?: boolean;
  valueDisabled ?: boolean;
}
declare const CommandBarButton: React.FC<CommandBarButtonProps>

export default CommandBarButton