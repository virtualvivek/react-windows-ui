import React, { ReactNode } from 'react'

export interface LinkCompoundProps {
    to ?: string;
    image ?: ReactNode;
    imageAlt ?: string;
    icon ?: ReactNode;
    linkStyle ?: string;
    margin ?: number | string;
    display ?: string;
    title ?: string;
    subtitle ?: string;
    focused ?: boolean;
    tooltip ?: string;
}
declare const LinkCompound: React.FC<LinkCompoundProps>

export default LinkCompound