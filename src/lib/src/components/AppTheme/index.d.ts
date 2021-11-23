import React from 'react'

export interface AppThemeProps {
  color ?: any;
  scheme ?: 'light' | 'dark' | 'system';
  onMount ?: () => void;
  onColorChange ?: () => void;
  onSchemeChange ?: () => void;
}
declare const AppTheme: React.FC<AppThemeProps>

export default AppTheme