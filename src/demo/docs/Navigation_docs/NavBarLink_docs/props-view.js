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
            <td>href link string</td>
            <td>'#'</td>
            <td>Set's NavBarItem  'to/' prop</td>
          </tr>
          <tr>
            <td><p className="app-code">text</p></td>
            <td>string</td>
            <td>null</td>
            <td>Set's NavBarItem item text</td>
          </tr>
          <tr>
            <td><p className="app-code">icon</p></td>
            <td>ReactNode | SVG | FontIcon</td>
            <td>null</td>
            <td>Set's NavBarItem icon</td>
          </tr>
          <tr>
            <td><p className="app-code">imgSrc</p></td>
            <td>source</td>
            <td>null</td>
            <td>Set's NavBarItem image</td>
          </tr>
          <tr>
            <td><p className="app-code">imgAlt</p></td>
            <td>'image'</td>
            <td>'color-primary'</td>
            <td>Set's NavBarItem image alt text</td>
          </tr>
          <tr>
            <td><p className="app-code">imgBorderRadius</p></td>
            <td>CSS Property</td>
            <td>'4px'</td>
            <td>Set's NavBarItem image border radius</td>
          </tr>
          <tr>
            <td><p className="app-code">showBadge</p></td>
            <td>integer | string</td>
            <td>null</td>
            <td>Set's NavBarItem badge</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default PropsView