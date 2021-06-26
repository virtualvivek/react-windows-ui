import React, { ReactNode } from 'react'

export interface CardProps {
    maxWidth ?: number | string;
    margin ?: number | string;
    padding ?: number | string;
    children ?: ReactNode;
    display ?: string;
    hoverable ?: boolean;
    focusable ?: boolean;
}
declare const Card: React.FC<CardProps>

export default Card