import React, { ReactNode } from 'react'

export interface LinkCompoundProps {
  to ?: string;
  img ?: ReactNode;
  imgAlt ?: string;
  icon ?: ReactNode;
  type ?: string;
  title ?: string;
  subtitle ?: string;
  focused ?: boolean;
  tooltip ?: string;
}
declare const LinkCompound: React.FC<LinkCompoundProps>

export default LinkCompound