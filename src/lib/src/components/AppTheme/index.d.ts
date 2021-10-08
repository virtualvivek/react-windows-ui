import React from 'react'

export interface AppThemeProps {
  color ?: any;
  scheme ?: 'light' | 'dark';
}
declare const AppTheme: React.FC<AppThemeProps>

export default AppTheme