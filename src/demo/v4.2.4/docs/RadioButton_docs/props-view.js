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
          <td><p className="ui-code">ref</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's RadioButton access refrence object.</td>
        </tr>
        <tr>
          <td><p className="ui-code">defaultChecked</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's RadioButton default checked.</td>
        </tr>
        <tr>
          <td><p className="ui-code">label</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's RadioButton text label.</td>
        </tr>
        <tr>
          <td><p className="ui-code">value</p></td>
          <td>any</td>
          <td>null</td>
          <td>Set's RadioButton value prop.</td>
        </tr>
        <tr>
          <td><p className="ui-code">name</p></td>
          <td>string | integer</td>
          <td>null</td>
          <td>Set's RadioButton name prop.</td>
        </tr>
        <tr>
          <td><p className="ui-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's RadioButton hover tooptip text.</td>
        </tr>
        <tr>
          <td><p className="ui-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's RadioButton disabled state.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onChange</p></td>
          <td>null</td>
          <td>object</td>
          <td>Set's RadioButton on change listener.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView