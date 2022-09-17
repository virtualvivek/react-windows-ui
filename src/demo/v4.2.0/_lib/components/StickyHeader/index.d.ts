import React from 'react'

export interface StickyHeaderProps {
  title ?: string;
  color ?: string;
  zIndex ?: number;
  lineHeight ?: number;
  stickOffset ?: number;
  fontSize ?: number | string;
  fontWeight ?: number | string;
}
declare const StickyHeader: React.FC<StickyHeaderProps>

export default StickyHeader