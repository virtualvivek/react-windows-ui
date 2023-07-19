import React, { ReactNode, CSSProperties } from "react";

export interface LinkProps {
  to ?: string;
  children ?: ReactNode;
  style ?: CSSProperties;
}
declare const Link: React.FC<LinkProps>;

export default Link;