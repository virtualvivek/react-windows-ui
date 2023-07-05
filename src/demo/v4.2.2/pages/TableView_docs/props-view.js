import React from 'react'

const PropsView = () => {
  return (
    <div className="app-table-view-container">
    <table className="app-table-view">
      <thead>
        <tr className="app-table-tr">
          <th align="left">Prop</th>
          <th align="left">Type</th>
          <th align="left">Default</th>
          <th align="left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p className="app-code">columns</p></td>
          <td>object</td>
          <td>[ ]</td>
          <td>Populates's TableView columns</td>
        </tr>
        <tr>
          <td><p className="app-code">rows</p></td>
          <td>object</td>
          <td>[ ]</td>
          <td>Populates's TableView rows</td>
        </tr>

        <tr>
          <td>
            <b>columns  ❑</b>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><p className="app-code">columns ▶ title</p></td>
          <td>string | integer</td>
          <td>null</td>
          <td>Set's TableView column title</td>
        </tr>
        <tr>
          <td><p className="app-code">columns ▶ sortable</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's Selected column is sortable</td>
        </tr>
        <tr>
          <td><p className="app-code">columns ▶ showSortIcon</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's Selected column to show sort icon</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView