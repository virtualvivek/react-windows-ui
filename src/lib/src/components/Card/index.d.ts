import React, { ReactNode, Component } from 'react'

export interface CardProps {
    maxWidth?: number | string;
    margin?: number | string;
    padding?: number | string;
    children?: ReactNode;
    display?: string;
    hoverable?: boolean;
    focusable?: boolean;
}
declare const Card: Component<CardProps>

export default Card
