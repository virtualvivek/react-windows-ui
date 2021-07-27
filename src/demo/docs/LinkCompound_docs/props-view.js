import React from 'react'

const PropsView = () => {
  return (
    <div className="app-table-view-container">
    <table className="app-table-view">
      <thead>
        <tr className="app-table-tr">
          <th className="" align="left">Prop</th>
          <th className="" align="left">Type</th>
          <th className="" align="left">Default</th>
          <th className="" align="left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p className="app-code">to</p></td>
          <td>link string</td>
          <td>'#'</td>
          <td>Set's Link to path</td>
        </tr>
        <tr>
          <td><p className="app-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Link children</td>
        </tr>
        <tr>
          <td><p className="app-code">subtitle</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Link children</td>
        </tr>
        <tr>
          <td><p className="app-code">image</p></td>
          <td>source</td>
          <td>null</td>
          <td>Set's Link children</td>
        </tr>
        <tr>
          <td><p className="app-code">imageAlt</p></td>
          <td>string</td>
          <td>'image'</td>
          <td>Set's Link children</td>
        </tr>
        <tr>
          <td><p className="app-code">icon</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's Link children</td>
        </tr>
        <tr>
          <td><p className="app-code">linkStyle</p></td>
          <td>'default' | 'border'</td>
          <td>'default'</td>
          <td>Set's Link children</td>
        </tr>
        <tr>
          <td><p className="app-code">target</p></td>
          <td>'_blank | _self | _parent | _top'</td>
          <td>'_self'</td>
          <td>Set's Link target</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView