import React, { ReactNode } from 'react'

export interface LinkCompoundFluentProps {
    to ?: string;
    linkStyle ?: string;
    icon ?: ReactNode;
    title ?: string;
    subtitle ?: string;
    display ?: string;
    onMouseOver ?: Function;
}
declare const LinkCompoundFluent: React.SFC<LinkCompoundFluentProps>

export default LinkCompoundFluent