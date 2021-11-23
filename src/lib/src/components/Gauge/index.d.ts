import React from 'react'

export interface GaugeProps {
  setProgress ?: number;
  size ?: number;
  value ?: string;
  valueColor ?: string;
  valueFontSize ?: number;
  info ?: string;
  infoFontSize ?: number;
  strokeColor ?: string;
  backgroundColor ?: string;  
}
declare const Gauge: React.Component<GaugeProps>

export default Gauge