import React, { ReactNode } from 'react'

export interface AccordionProps {
    width ?: number | string;
    focused ?: boolean;
    collapseIcon ?: ReactNode;
    expandIcon ?: ReactNode;
    title ?: string;
    children ?: ReactNode;
}
declare const Accordion: React.FC<AccordionProps>

export default Accordion