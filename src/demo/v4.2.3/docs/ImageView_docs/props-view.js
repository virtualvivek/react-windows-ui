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
          <td><p className="ui-code">src</p></td>
          <td>source</td>
          <td>required</td>
          <td>Set's ImageView source.</td>
        </tr>
        <tr>
          <td><p className="ui-code">width</p></td>
          <td>integer | string</td>
          <td>124</td>
          <td>Set's ImageView width.</td>
        </tr>
        <tr>
          <td><p className="ui-code">height</p></td>
          <td>integer | string</td>
          <td>124</td>
          <td>Set's ImageView height.</td>
        </tr>
        <tr>
          <td><p className="ui-code">alt</p></td>
          <td>string</td>
          <td>"image"</td>
          <td>Set's ImageView alt text.</td>
        </tr>
        <tr>
          <td><p className="ui-code">objectFit</p></td>
          <td>CSSProperties</td>
          <td>"cover"</td>
          <td>Set's ImageView objectFit property.</td>
        </tr>
        <tr>
          <td><p className="ui-code">isLoading</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's ImageView loading state.</td>
        </tr>
        <tr>
          <td><p className="ui-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ImageView hover tooltip.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onLoad</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's ImageView on load callback.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onError</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's ImageView on error callback.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView