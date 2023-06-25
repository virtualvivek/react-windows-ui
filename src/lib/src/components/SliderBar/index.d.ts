import React from "react";

export interface SliderBarProps {
  min ?: number;
  max ?: number;
  step ?: number;
  tooltip ?: string;
  thumbStyle ?: string;
  showValue ?: boolean;
  showPopupValue ?: boolean;
  defaultValue ?: number;
  onChange ?: () => void;
  onDragEnd ?: () => void;
  onDragStart ?: () => void;
}
declare const SliderBar: React.FC<SliderBarProps>;

export default SliderBar;