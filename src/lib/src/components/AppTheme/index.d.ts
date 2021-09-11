import React, { ReactNode } from 'react'

export interface AppThemeProps {
  color ?: any;
  mode ?: 'light' | 'dark';
}
declare const AppTheme: React.FC<AppThemeProps>

export default AppTheme