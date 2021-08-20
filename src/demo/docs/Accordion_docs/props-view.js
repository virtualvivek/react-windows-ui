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
          <td>Set's the accordion title</td>
        </tr>
        <tr>
          <td><p className="app-code">focused</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's the accordion background focused</td>
        </tr>
        <tr>
          <td><p className="app-code">collapseIcon</p></td>
          <td>ReactNode</td>
          <td><i className="icons10-angle-down"></i></td>
          <td>Set's the accordion title's end collapsed icon</td>
        </tr>
        <tr>
          <td><p className="app-code">expandIcon</p></td>
          <td>ReactNode</td>
          <td><i className="icons10-angle-up"></i></td>
          <td>Set's the accordion title's end expand icon</td>
        </tr>
        <tr>
          <td><p className="app-code">children</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's the accordion children</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView