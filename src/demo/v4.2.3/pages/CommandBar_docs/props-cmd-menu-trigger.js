import React from "react";

const PropsCmdMenuTrigger = () => {
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
            <td><p className="app-code">children</p></td>
            <td>ReactNode</td>
            <td>
              <button
              className="app-cmdbar-button"
              style={{background: "var(--color-ui-hover-default)"}}>
                <i className="icons10-angle-down"></i>
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