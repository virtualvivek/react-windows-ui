import React from 'react'

export interface SliderBarProps {
    min ?: number;
    max ?: number;
    value ?: number;
    step ?: number;
    showValue ?: boolean;
    thumbStyle ?: string;
    onChange ?: () => void;
    tooltip ?: string;
}
declare const SliderBar: React.SFC<SliderBarProps>

export default SliderBar