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
          <td>true</td>
          <td>Toggle's View visibility</td>
        </tr>
        <tr>
          <td><p className="app-code">animationType</p></td>
          <td>'none' | 'fade'</td>
          <td>'none'</td>
          <td>Set's View animate type on visible</td>
        </tr>
        <tr>
          <td><p className="app-code">zIndex</p></td>
          <td>integer</td>
          <td>1</td>
          <td>Set's View zIndex</td>
        </tr>
        <tr>
          <td><p className="app-code">style</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's View container style</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView