import React from "react";

const PropsCmdMenuItem = () => {
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
            <td><p className="app-code">label</p></td>
            <td>string</td>
            <td>" "</td>
            <td>Set's CommandBar MenuItem Label.</td>
          </tr>
          <tr>
            <td><p className="app-code">icon</p></td>
            <td>ReactNode | SVG | JSX</td>
            <td>null</td>
            <td>Set's CommandBar MenuItem icon.</td>
          </tr>
          <tr>
            <td><p className="app-code">children</p></td>
            <td>ReactNode</td>
            <td>{`{ }`}</td>
            <td>Nesting CommandBar's <b>MenuItem</b> inside another <b>MenuItem</b>.</td>
          </tr>
          <tr>
            <td><p className="app-code">onClick</p></td>
            <td>function</td>
            <td>{`{ }`}</td>
            <td>Set's CommandBar MennItem onClick listener.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default PropsCmdMenuItem;