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
          <td><p className="app-code">isVisible</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's SplashScreen visibility.</td>
        </tr>
        <tr>
          <td><p className="app-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's SplashScreen title.</td>
        </tr>
        <tr>
          <td><p className="app-code">subtitle</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's SplashScreen subtitle.</td>
        </tr>
        <tr>
          <td><p className="app-code">logo</p></td>
          <td>React Node | img</td>
          <td>null</td>
          <td>Set's SplashScreen logo.</td>
        </tr>
        <tr>
          <td><p className="app-code">duration</p></td>
          <td>integer</td>
          <td>0</td>
          <td>Set's SplashScreen additional delay before page loads.</td>
        </tr>
        <tr>
          <td><p className="app-code">backgroundColor</p></td>
          <td>CSS Property</td>
          <td>Primary Color</td>
          <td>Set's SplashScreen background color.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView