import React from "react";

const PropsCmdMenu = () => {
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
            <td><p className="app-code">menuDirection</p></td>
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