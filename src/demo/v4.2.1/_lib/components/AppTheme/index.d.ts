import React from 'react'

export interface AppThemeProps {
  color ?: any;
  colorDarkMode ?: any;
  scheme ?: "light" | "dark" | "system";
  onColorChange ?: () => void;
  onSchemeChange ?: () => void;
}
declare const AppTheme: React.FC<AppThemeProps>

export default AppTheme