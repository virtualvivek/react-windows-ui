import React, { ReactNode, MouseEvent } from 'react'

export interface LinkCompoundProps {
  to ?: string;
  img ?: ReactNode;
  imgAlt ?: string;
  icon ?: ReactNode;
  type ?: "default" | "border";
  title ?: string;
  subtitle ?: string;
  focused ?: boolean;
  tooltip ?: string;
  onClick ?: MouseEvent<any>;
}
declare const LinkCompound: React.FC<LinkCompoundProps>

export default LinkCompound