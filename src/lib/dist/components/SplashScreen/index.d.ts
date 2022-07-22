import React from 'react'

export interface SplashScreenProps {
  title ?: any;
  subtitle ?: any;
  duration ?: number;
  isVisible ?: boolean;
  backgroundColor ?: string;
}
declare const SplashScreen: React.FC<SplashScreenProps>

export default SplashScreen