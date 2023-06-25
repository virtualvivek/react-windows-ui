import React, { ReactNode } from 'react'

export interface LinkCompoundProps {
  to ?: string;
  imgSrc ?: string | any;
  imgAlt ?: string;
  icon ?: ReactNode;
  type ?: "default" | "border";
  title ?: string;
  subtitle ?: string;
  focused ?: boolean;
  tooltip ?: string;
  onClick ?: () => void;
}
declare const LinkCompound: React.FC<LinkCompoundProps>

export default LinkCompound