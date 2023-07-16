import React from "react";

const PropsView = () => {
  return (
    <div className="app-table-view-container">
    <table className="app-table-view">
      <thead>
        <tr className="app-table-tr">
          <th align="left">Prop</th>
          <th align="left">Type</th>
          <th align="left">Default</th>
          <th align="left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p className="app-code">ref</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's Checkbox access refrence object.</td>
        </tr>
        <tr>
          <td><p className="app-code">defaultChecked</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Checkbox default checked.</td>
        </tr>
        <tr>
          <td><p className="app-code">label</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Checkbox text label.</td>
        </tr>
        <tr>
          <td><p className="app-code">value</p></td>
          <td>any</td>
          <td>null</td>
          <td>Set's Checkbox value prop.</td>
        </tr>
        <tr>
          <td><p className="app-code">name</p></td>
          <td>string | integer</td>
          <td>null</td>
          <td>Set's Checkbox group name prop.</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Checkbox hover tooptip text.</td>
        </tr>
        <tr>
          <td><p className="app-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Checkbox disabled state.</td>
        </tr>
        <tr>
          <td><p className="app-code">onChange</p></td>
          <td>null</td>
          <td>object</td>
          <td>Set's Checkbox on change listener.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView;