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
          <td>Sets the avatar source.</td>
        </tr>
        <tr>
          <td><p className="app-code">size</p></td>
          <td>integer | string</td>
          <td>default</td>
          <td>Sets the avatar size.</td>
        </tr>
        <tr>
          <td><p className="app-code">alt</p></td>
          <td>string</td>
          <td>null</td>
          <td>Sets avatar alt text.</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Sets avatar hover tooltip.</td>
        </tr>
        <tr>
          <td><p className="app-code">objectFit</p></td>
          <td>CSS Property</td>
          <td>default</td>
          <td>Sets avatar objectFit prop.</td>
        </tr>
        <tr>
          <td><p className="app-code">showDropShadow</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Sets avatar blurred drop shadows.</td>
        </tr>
        <tr>
          <td><p className="app-code">onLoad</p></td>
          <td>object</td>
          <td>null</td>
          <td>Sets the avatar onLoad listener.</td>
        </tr>
        <tr>
          <td><p className="app-code">onError</p></td>
          <td>object</td>
          <td>null</td>
          <td>Sets the avatar onError listener.</td>
        </tr>

        <tr>
          <td><p className="app-code">showBadge</p></td>
          <td>boolean | string | "jsx"</td>
          <td>null</td>
          <td>Sets avatar's badge visibility & value.</td>
        </tr>
        <tr>
          <td><p className="app-code">badgePosition</p></td>
          <td>"bottom" | "top"</td>
          <td>"top"</td>
          <td>Sets avatar's badge position.</td>
        </tr>
        <tr>
          <td><p className="app-code">badgeStyle</p></td>
          <td>object</td>
          <td>[ ]</td>
          <td>Sets avatar's badge container style.</td>
        </tr>
        <tr>
          <td><p className="app-code">badgeTooltip</p></td>
          <td>string</td>
          <td>default</td>
          <td>Sets avatar's badge tooltip.</td>
        </tr>
        <tr>
          <td><p className="app-code">badgeBackgroundColor</p></td>
          <td>CSS Property</td>
          <td>default</td>
          <td>Sets avatar's badge backgroundColor.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView