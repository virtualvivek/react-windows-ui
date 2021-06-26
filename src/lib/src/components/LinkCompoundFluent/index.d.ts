import React, { ReactNode, Component } from 'react'

export interface LinkCompoundFluentProps {
    to?: string;
    linkStyle?: string;
    icon?: ReactNode;
    title?: string;
    subtitle?: string;
    display?: string;
    onMouseOver?: Function;
}
declare const LinkCompoundFluent: Component<LinkCompoundFluentProps>

export default LinkCompoundFluent
