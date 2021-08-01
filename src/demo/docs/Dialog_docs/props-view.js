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
          <td><p className="app-code">isVisible</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Dialog visibility</td>
        </tr>
        <tr>
          <td><p className="app-code">padding</p></td>
          <td>integer | string</td>
          <td>0</td>
          <td>Set's Dialog padding style</td>
        </tr>
        <tr>
          <td><p className="app-code">onBackdropPress</p></td>
          <td>function</td>
          <td>undefined</td>
          <td>Callback on backdrop press</td>
        </tr>
        <tr>
          <td><p className="app-code">showDropShadow</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Dialog blurred drop shadows</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView