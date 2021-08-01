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
          <td>Sets the avatar source</td>
        </tr>
        <tr>
          <td><p className="app-code">size</p></td>
          <td>small | medium | large</td>
          <td>medium</td>
          <td>Sets the avatar size</td>
        </tr>
        <tr>
          <td><p className="app-code">isLoading</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Sets the avatar loading state</td>
        </tr>
        <tr>
          <td><p className="app-code">showDropShadow</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Sets avatar blurred drop shadows</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Sets avatar hover tiiltip</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView