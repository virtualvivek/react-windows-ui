import React, { ReactNode } from 'react'

export interface LinkCompoundProps {
  to ?: string;
  img ?: ReactNode;
  imgAlt ?: string;
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