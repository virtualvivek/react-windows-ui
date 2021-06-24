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
    onMouseOver ?: Function;
    focused ?: boolean;
}
declare const LinkCompound: React.SFC<LinkCompoundProps>

export default LinkCompound