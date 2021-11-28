import React from 'react'

export interface SliderBarProps {
  min ?: number;
  max ?: number;
  step ?: number;
  tooltip ?: string;
  showValue ?: boolean;
  thumbStyle ?: string;
  defaultValue ?: number;
  onChange ?: () => void;
}
declare const SliderBar: React.FC<SliderBarProps>

export default SliderBar