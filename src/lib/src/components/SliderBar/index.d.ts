import React from "react";

export interface SliderBarProps {
  width ?: any;
  min ?: number;
  max ?: number;
  step ?: number;
  tooltip ?: string;
  thumbStyle ?: string;
  showPopupValue ?: boolean;
  defaultValue ?: number;
  onChange ?: () => void;
  onDragEnd ?: () => void;
  onDragStart ?: () => void;
  orientation ?: "vertical" | "horizontal";
}
declare const SliderBar: React.FC<SliderBarProps>;

export default SliderBar;