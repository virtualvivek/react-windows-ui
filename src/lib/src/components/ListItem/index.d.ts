import React, { ReactNode, Component } from 'react'

export interface ListItemProps {
    to ?: string;
    img ?: ReactNode;
    imgAlt ?: string;
    imgBorderRadius ?: number | string;
    borderBottom ?: boolean;
    title ?: string;
    subtitle ?: string;
    info ?: string;
}
declare const ListItem: Component<ListItemProps>

export default ListItem
