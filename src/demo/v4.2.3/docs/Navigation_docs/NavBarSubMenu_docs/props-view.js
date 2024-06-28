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
          <td><p className="ui-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's NavBarSubMenu Title</td>
        </tr>
        <tr>
          <td><p className="ui-code">children</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's NavBarSubMenu children</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView