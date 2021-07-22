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
          <td><p className="app-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Sets the accordion title</td>
        </tr>
        <tr>
          <td><p className="app-code">focused</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Sets the accordion background focused</td>
        </tr>
        <tr>
          <td><p className="app-code">children</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Sets the accordion children</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView