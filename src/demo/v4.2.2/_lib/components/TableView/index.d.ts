import React, { ReactNode } from "react";

export interface TableViewProps {
  rows ?: string[];
  columns ?: string[];
  rowFontSize ?: any;
  headerFontSize ?: any;
  TableHeaderComponent ?: ReactNode;
  TableFooterComponent ?: ReactNode;
}
declare const TableView: React.FC<TableViewProps>;

export default TableView;