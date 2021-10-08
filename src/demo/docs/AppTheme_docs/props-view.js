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
          <td><p className="app-code">color</p></td>
          <td>CSS Color Value</td>
          <td>null</td>
          <td>Set's AppTheme primary color</td>
        </tr>
        <tr>
          <td><p className="app-code">scheme</p></td>
          <td>'light' | 'dark'</td>
          <td>'light'</td>
          <td>Set's AppTheme appearance mode</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView