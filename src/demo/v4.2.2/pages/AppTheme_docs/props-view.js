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
          <td><p className="app-code">scheme</p></td>
          <td>'light' | 'dark' | 'system'</td>
          <td>'system'</td>
          <td>Set's AppTheme appearance mode.</td>
        </tr>
        <tr>
          <td><p className="app-code">color</p></td>
          <td>CSS Color</td>
          <td>null</td>
          <td>Set's AppTheme primary color.</td>
        </tr>
        <tr>
          <td><p className="app-code">colorDarkMode</p></td>
          <td>CSS Color</td>
          <td>null</td>
          <td>Set's AppTheme primary dark-mode color.</td>
        </tr>
        <tr>
          <td><p className="app-code">onColorChange</p></td>
          <td>Object</td>
          <td>[ ]</td>
          <td>Set's AppTheme Callback on Color Change.</td>
        </tr>
        <tr>
          <td><p className="app-code">onSchemeChange</p></td>
          <td>Object</td>
          <td>[ ]</td>
          <td>Set's AppTheme Callback on Scheme Change.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView