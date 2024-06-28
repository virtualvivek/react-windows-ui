import React from "react";

const PropsCmdMenuItem = () => {
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
            <td><p className="ui-code">label</p></td>
            <td>string</td>
            <td>" "</td>
            <td>Set's CommandBar MenuItem Label.</td>
          </tr>
          <tr>
            <td><p className="ui-code">icon</p></td>
            <td>ReactNode | SVG | JSX</td>
            <td>null</td>
            <td>Set's CommandBar MenuItem icon.</td>
          </tr>
          <tr>
            <td><p className="ui-code">children</p></td>
            <td>ReactNode</td>
            <td>{`{ }`}</td>
            <td>Nesting CommandBar's <b>MenuItem</b> inside another <b>MenuItem</b>.</td>
          </tr>
          <tr>
            <td><p className="ui-code">onClick</p></td>
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