import React from 'react'

const PropsView = () => {
  return (
    <div className="ui-table-view-container">
    <table className="ui-table-view">
      <thead>
        <tr className="ui-table-tr">
          <th align="left">Prop</th>
          <th align="left">Type</th>
          <th align="left">Default</th>
          <th align="left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p className="ui-code">columns</p></td>
          <td>object</td>
          <td>[ ]</td>
          <td>Populates's TableView columns.</td>
        </tr>
        <tr>
          <td><p className="ui-code">rows</p></td>
          <td>object</td>
          <td>[ ]</td>
          <td>Populates's TableView rows.</td>
        </tr>
        <tr>
          <td><p className="ui-code">headerFontSize</p></td>
          <td>CSS FontSize</td>
          <td>18</td>
          <td>Populates's TableView header fontSize.</td>
        </tr>
        <tr>
          <td><p className="ui-code">rowFontSize</p></td>
          <td>CSS FontSize</td>
          <td>16</td>
          <td>Populates's TableView rows fontSize.</td>
        </tr>
        <tr>
          <td><p className="ui-code">TableHeaderComponent</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Render TableView's Header Component.</td>
        </tr>
        <tr>
          <td><p className="ui-code">TableFooterComponent</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Render TableView's Footer Component.</td>
        </tr>
        <tr>
          <td><p className="ui-code">columns  ❑</p></td>
          <td>object</td>
          <td>[ ]</td>
          <td>Set's TableView list columns data.</td>
        </tr>
        <tr>
          <td><p className="ui-code">columns ▶ title</p></td>
          <td>string | integer</td>
          <td>null</td>
          <td>Set's TableView column title</td>
        </tr>
        <tr>
          <td><p className="ui-code">columns ▶ sortable</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's Selected column is sortable.</td>
        </tr>
        <tr>
          <td><p className="ui-code">columns ▶ showSortIcon</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's Selected column to show sort icon.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView