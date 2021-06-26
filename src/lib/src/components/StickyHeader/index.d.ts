import React from 'react'

export interface StickyHeaderProps {
    title ?: string;
    color ?: string;
    stickOffset ?: number;
    fontSize ?: number | string;
    fontWeight ?: number | string;
    lineHeight ?: number;
    zIndex ?: number;
}
declare const StickyHeader: React.FC<StickyHeaderProps>

export default StickyHeader