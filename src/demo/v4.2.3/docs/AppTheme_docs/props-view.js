import React from 'react'

const PropsView = () => {
  return (
    <div className="ui-table-view-container">
    <table className="ui-table-view">
      <thead>
        <tr className="ui-table-tr">
          <th align="left">Prop</th>
          <th align="left">Type</th>
          <th align="left">Default</th>
          <th align="left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p className="ui-code">scheme</p></td>
          <td>"light" | "dark" | "system" | "current"</td>
          <td>"current"</td>
          <td>Set's AppTheme appearance mode.</td>
        </tr>
        <tr>
          <td><p className="ui-code">color</p></td>
          <td>CSS Color</td>
          <td>null</td>
          <td>Set's AppTheme primary color.</td>
        </tr>
        <tr>
          <td><p className="ui-code">colorDarkMode</p></td>
          <td>CSS Color</td>
          <td>null</td>
          <td>Set's AppTheme primary dark-mode color.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onColorChange</p></td>
          <td>Object</td>
          <td>[ ]</td>
          <td>Set's AppTheme Callback on Color Change.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onSchemeChange</p></td>
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