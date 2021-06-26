import React, { ReactNode, Component } from 'react'

export interface LinkCompoundProps {
    to?: string;
    image?: ReactNode;
    imageAlt?: string;
    icon?: ReactNode;
    linkStyle?: string;
    margin?: number | string;
    display?: string;
    title?: string;
    subtitle?: string;
    onMouseOver?: Function;
    focused?: boolean;
}
declare const LinkCompound: Component<LinkCompoundProps>

export default LinkCompound
