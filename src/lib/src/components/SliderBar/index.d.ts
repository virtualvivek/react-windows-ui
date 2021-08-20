import React from 'react'

export interface SliderBarProps {
  min ?: number;
  max ?: number;
  defaultValue ?: number;
  step ?: number;
  showValue ?: boolean;
  thumbStyle ?: string;
  onChange ?: () => void;
  tooltip ?: string;
}
declare const SliderBar: React.FC<SliderBarProps>

export default SliderBar