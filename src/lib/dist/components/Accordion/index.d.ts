import React, { ReactNode, CSSProperties } from "react";

export interface AccordionProps {
  style ?: CSSProperties;
  headerTitle ?: string;
  headerStyle ?: CSSProperties;
  children ?: ReactNode;
  onExpand ?: () => void;
  onCollapse ?: () => void;
}
declare const Accordion: React.FC<AccordionProps>;

export default Accordion;