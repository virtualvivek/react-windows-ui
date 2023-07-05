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
          <td><p className="app-code">label</p></td>
          <td>string</td>
          <td>"Select"</td>
          <td>Set's MenuBar label.</td>
        </tr>
        <tr>
          <td><p className="app-code">searchPlaceholder</p></td>
          <td>string</td>
          <td>"Search here"</td>
          <td>Set's MenuBar Search placeholder.</td>
        </tr>
        <tr>
          <td><p className="app-code">showSearchBar</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Toggle's MenuBar Search Input visibility.</td>
        </tr>
        <tr>
          <td><p className="app-code">data ❑</p></td>
          <td>object</td>
          <td>[ ]</td>
          <td>Set's MenuBar menu items.</td>
        </tr>
        <tr>
          <td><p className="app-code">data {'▶'} label</p></td>
          <td>integer | string</td>
          <td>null</td>
          <td>Set's MenuBar item label.</td>
        </tr>
        <tr>
          <td><p className="app-code">data {'▶'} icon</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's MenuBar item icon.</td>
        </tr>
        <tr>
          <td><p className="app-code">data {'▶'} onClick</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's MenuBar item onClick listner.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView