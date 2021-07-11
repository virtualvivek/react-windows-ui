import React from 'react'

export interface GaugeProps {
    value ?: string;
    info ?: string;
    backgroundColor ?: string;
    strokeColor ?: string;
    strokeWidth ?: number | string;
    valueColor ?: string;
    scale ?: number;
    setProgress ?: number;
    scale ?: number;
    type ?: string;
}
declare const Gauge: React.FC<GaugeProps>

export default Gauge