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
          <td><p className="app-code">src</p></td>
          <td>source</td>
          <td>required</td>
          <td>Set's ImageView source.</td>
        </tr>
        <tr>
          <td><p className="app-code">width</p></td>
          <td>integer | string</td>
          <td>124</td>
          <td>Set's ImageView width.</td>
        </tr>
        <tr>
          <td><p className="app-code">height</p></td>
          <td>integer | string</td>
          <td>124</td>
          <td>Set's ImageView height.</td>
        </tr>
        <tr>
          <td><p className="app-code">alt</p></td>
          <td>string</td>
          <td>'image'</td>
          <td>Set's ImageView alt text.</td>
        </tr>
        <tr>
          <td><p className="app-code">objectFit</p></td>
          <td>CSSProperties</td>
          <td>'cover'</td>
          <td>Set's ImageView objectFit property.</td>
        </tr>
        <tr>
          <td><p className="app-code">isLoading</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's ImageView loading state.</td>
        </tr>
        <tr>
          <td><p className="app-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ImageView title.</td>
        </tr>
        <tr>
          <td><p className="app-code">subtitle</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ImageView subtitle.</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ImageView hover tooltip.</td>
        </tr>
        <tr>
          <td><p className="app-code">insetShadow</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's ImageView inset shadow.</td>
        </tr>
        <tr>
          <td><p className="app-code">onLoad</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's ImageView on load callback.</td>
        </tr>
        <tr>
          <td><p className="app-code">onError</p></td>
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