import React from 'react'

export interface TableViewProps {
  columns ?: string[];
  rows ?: string[];
}
declare const TableView: React.FC<TableViewProps>

export default TableView