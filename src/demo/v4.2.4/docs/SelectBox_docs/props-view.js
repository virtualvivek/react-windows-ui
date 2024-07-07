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
          <td><p className="ui-code">defaultValue</p></td>
          <td>string - oneof data value</td>
          <td>1st Element</td>
          <td>Set's Select default selected value.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onChange</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's Select onChange listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">name</p></td>
          <td>string | integer</td>
          <td>null</td>
          <td>Set's SelectNative name prop.</td>
        </tr>
        <tr>
          <td><p className="ui-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set Select's hover tooltip prop.</td>
        </tr>
        <tr>
          <td><p className="ui-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Select/SelectNative disabled state.</td>
        </tr>
        <tr>
          <td><p className="ui-code">data ❑</p></td>
          <td>object</td>
          <td>[ ]</td>
          <td>Set's Select/SelectNative data.</td>
        </tr>
        <tr>
          <td><p className="ui-code">data ▶ label</p></td>
          <td>integer | string</td>
          <td>null</td>
          <td>Set's Select/SelectNative data item label.</td>
        </tr>
        <tr>
          <td><p className="ui-code">data ▶ value</p></td>
          <td>integer | string</td>
          <td>null</td>
          <td>Set's Select/SelectNative data item value.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView