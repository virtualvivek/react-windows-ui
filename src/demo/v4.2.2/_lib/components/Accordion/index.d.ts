import React, { ReactNode } from "react";

export interface AccordionProps {
  headerTitle ?: string;
  children ?: ReactNode;
}
declare const Accordion: React.FC<AccordionProps>;

export default Accordion;