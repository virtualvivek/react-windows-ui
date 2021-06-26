import React, { ReactNode, Component } from 'react'

export interface AccordionProps {
    width ?: number | string;
    focused ?: boolean;
    collapseIcon ?: ReactNode;
    expandIcon ?: ReactNode;
    title ?: string;
    children ?: ReactNode;
}
declare const Accordion: Component<AccordionProps>

export default Accordion
