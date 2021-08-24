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
          <td><p className="app-code">to</p></td>
          <td>link href string</td>
          <td>'#'</td>
          <td>Set's Link to path</td>
        </tr>
        <tr>
          <td><p className="app-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Link title</td>
        </tr>
        <tr>
          <td><p className="app-code">subtitle</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Link subtitle</td>
        </tr>
        <tr>
          <td><p className="app-code">img</p></td>
          <td>source</td>
          <td>null</td>
          <td>Set's Link start image</td>
        </tr>
        <tr>
          <td><p className="app-code">imgAlt</p></td>
          <td>string</td>
          <td>'image'</td>
          <td>Set's Link img alt text</td>
        </tr>
        <tr>
          <td><p className="app-code">icon</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's Link start icon</td>
        </tr>
        <tr>
          <td><p className="app-code">type</p></td>
          <td>'default' | 'border'</td>
          <td>'default'</td>
          <td>Set's Link style type</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Link Hover Tooltip</td>
        </tr>
        <tr>
          <td><p className="app-code">focused</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Link focused style</td>
        </tr>
        <tr>
          <td><p className="app-code">style</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's Link container css styles</td>
        </tr>
        <tr>
          <td><p className="app-code">target</p></td>
          <td>'_blank | _self | _parent | _top'</td>
          <td>'_self'</td>
          <td>Set's Link target</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView