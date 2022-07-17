import React, { ReactNode } from 'react'

export interface ListItemProps {
  to ?: string;
  imgSrc ?: string | any;
  imgAlt ?: string;
  imgBorderRadius ?: number | string;
  borderBottom ?: boolean;
  title ?: string;
  subtitle ?: string;
  info ?: string;
  ItemEndComponent: ReactNode;
}
declare const ListItem: React.FC<ListItemProps>

export default ListItem