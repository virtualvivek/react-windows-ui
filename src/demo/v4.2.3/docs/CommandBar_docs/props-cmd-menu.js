import React from "react";

const PropsCmdMenu = () => {
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
            <td><p className="ui-code">menuDirection</p></td>
            <td>"rightJustify" | "leftJustify"</td>
            <td>"rightJustify"</td>
            <td>Set's CommandBar Menu open direction.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default PropsCmdMenu;