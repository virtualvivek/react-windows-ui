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
          <td><p className="app-code">hoverable</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Card hoverable on mouse</td>
        </tr>
        <tr>
          <td><p className="app-code">focused</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Card focused state</td>
        </tr>
        <tr>
          <td><p className="app-code">display</p></td>
          <td>css property</td>
          <td>'block'</td>
          <td>Set's Card display style property</td>
        </tr>
        <tr>
          <td><p className="app-code">maxWidth</p></td>
          <td>integer | string</td>
          <td>inherit</td>
          <td>Set's Card maxWidth style property</td>
        </tr>
        <tr>
          <td><p className="app-code">padding</p></td>
          <td>integer | string</td>
          <td>0</td>
          <td>Set's Card padding style property</td>
        </tr>
        <tr>
          <td><p className="app-code">margin</p></td>
          <td>integer | string</td>
          <td>0</td>
          <td>Set's Card margin style property</td>
        </tr>
        <tr>
          <td><p className="app-code">children</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's Card children</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView