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
          <td><p className="app-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ListItem title</td>
        </tr>
        <tr>
          <td><p className="app-code">subtitle</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ListItem subtitle</td>
        </tr>
        <tr>
          <td><p className="app-code">info</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ListItem info text</td>
        </tr>
        <tr>
          <td><p className="app-code">img</p></td>
          <td>source</td>
          <td>null</td>
          <td>Set's ListItem image</td>
        </tr>
        <tr>
          <td><p className="app-code">imgAlt</p></td>
          <td>string</td>
          <td>'image'</td>
          <td>Set's ListItem image alt text</td>
        </tr>
        <tr>
          <td><p className="app-code">imgBorderRadius</p></td>
          <td>integer/string</td>
          <td>'50%'</td>
          <td>Set's ListItem image border-radius</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView