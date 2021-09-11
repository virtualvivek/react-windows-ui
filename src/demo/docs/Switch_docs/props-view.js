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
          <td><p className="app-code">defaultChecked</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Switch default checked</td>
        </tr>
        <tr>
          <td><p className="app-code">labelOn</p></td>
          <td>string</td>
          <td>'On'</td>
          <td>Set's Switch label on</td>
        </tr>
        <tr>
          <td><p className="app-code">labelOff</p></td>
          <td>string</td>
          <td>'Off'</td>
          <td>Set's Switch label off</td>
        </tr>
        <tr>
          <td><p className="app-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Switch disabled state</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Switch hover tooltip text</td>
        </tr>
        <tr>
          <td><p className="app-code">onChange</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's Switch onChange event listener</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView