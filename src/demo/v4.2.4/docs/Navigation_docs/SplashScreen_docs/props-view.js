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
          <td><p className="ui-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's SplashScreen title.</td>
        </tr>
        <tr>
          <td><p className="ui-code">logo</p></td>
          <td>React Node | img</td>
          <td>null</td>
          <td>Set's SplashScreen logo.</td>
        </tr>
        <tr>
          <td><p className="ui-code">isVisible</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's SplashScreen visibility.</td>
        </tr>
        <tr>
          <td><p className="ui-code">subtitle</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's SplashScreen subtitle.</td>
        </tr>
        <tr>
          <td><p className="ui-code">duration</p></td>
          <td>integer</td>
          <td>0</td>
          <td>Set's SplashScreen additional delay before page loads.</td>
        </tr>
        <tr>
          <td><p className="ui-code">backgroundColor</p></td>
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