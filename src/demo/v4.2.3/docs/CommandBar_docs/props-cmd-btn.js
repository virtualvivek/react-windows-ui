import React from "react";

const PropsCmdBtn = () => {
  return (
    <div className="app-table-view-container">
      <table className="app-table-view">
        <thead>
          <tr className="app-table-tr">
            <th align="left">Prop</th>
            <th align="left">Type</th>
            <th align="left">Default</th>
            <th align="left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p className="app-code">value</p></td>
            <td>string</td>
            <td>"Title"</td>
            <td>Set's CommandBar Button text.</td>
          </tr>
          <tr>
            <td><p className="app-code">icon</p></td>
            <td>ReactNode | SVG | JSX</td>
            <td>null</td>
            <td>Set's CommandBar Button text icon.</td>
          </tr>
          <tr>
            <td><p className="app-code">disabled</p></td>
            <td>boolean</td>
            <td>false</td>
            <td>Set's CommandBar Button Disabled.</td>
          </tr>
          <tr>
            <td><p className="app-code">onClick</p></td>
            <td>function</td>
            <td>null</td>
            <td>Set's CommandBar Button onClick listener.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default PropsCmdBtn;