import React from 'react'

export interface SplashScreenProps {
  isVisible ?: boolean;
  duration ?: number;
  title ?: any;
  subtitle ?: any;
  backgroundColor ?: string;  
}
declare const SplashScreen: React.FC<SplashScreenProps>

export default SplashScreen