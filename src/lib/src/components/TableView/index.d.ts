import React from "react";

export interface TableViewProps {
  rows ?: string[];
  columns ?: string[];
}
declare const TableView: React.FC<TableViewProps>;

export default TableView;