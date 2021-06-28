import React from 'react'

export interface TableViewProps {
    columns ?: string[];
    data ?: string[];
}
declare const TableView: React.FC<TableViewProps>

export default TableView