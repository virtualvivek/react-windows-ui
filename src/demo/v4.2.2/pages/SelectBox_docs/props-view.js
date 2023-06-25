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
          <td><p className="app-code">defaultValue</p></td>
          <td>string - oneof data value</td>
          <td>null</td>
          <td>Set's Select default selected value</td>
        </tr>
        <tr>
          <td><p className="app-code">onChange</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's Select onChange listener</td>
        </tr>
        <tr>
          <td><p className="app-code">name</p></td>
          <td>string | integer</td>
          <td>null</td>
          <td>Set's SelectNative name prop</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set Select's hover tooltip prop</td>
        </tr>
        <tr>
          <td><p className="app-code">data ❑</p></td>
          <td>object</td>
          <td>[ ]</td>
          <td>Set's Select/SelectNative data</td>
        </tr>
        <tr>
          <td><p className="app-code">data ▶ label</p></td>
          <td>integer | string</td>
          <td>null</td>
          <td>Set's Select/SelectNative data item label</td>
        </tr>
        <tr>
          <td><p className="app-code">data ▶ value</p></td>
          <td>integer | string</td>
          <td>null</td>
          <td>Set's Select/SelectNative data item value</td>
        </tr>
        <tr>
          <td><p className="app-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Select/SelectNative disabled state</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView