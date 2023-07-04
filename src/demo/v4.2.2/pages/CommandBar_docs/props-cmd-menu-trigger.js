import React from "react";

const PropsCmdMenuTrigger = () => {
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
            <td><p className="app-code">children</p></td>
            <td>ReactNode</td>
            <td>
              <button
              class="app-cmdbar-button"
              style={{background: "var(--color-ui-hover-default)"}}>
                <i class="icons10-angle-down"></i>
              </button>
            </td>
            <td>Set's CommandBar Menu Custom Trigger Component.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default PropsCmdMenuTrigger;