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
          <td><p className="app-code">to</p></td>
          <td>link href string</td>
          <td>'#'</td>
          <td>Set's Link to path</td>
        </tr>
        <tr>
          <td><p className="app-code">target</p></td>
          <td>'_blank | _self | _parent | _top'</td>
          <td>'_self'</td>
          <td>Set's Link target</td>
        </tr>
        <tr>
          <td><p className="app-code">style</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's Link css styles</td>
        </tr>
        <tr>
          <td><p className="app-code">children</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's Link children</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView