import React from "react";

const ThemeSwitchProps = () => {
  return (
    <>
    <h2>Props</h2>
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
          <td><p className="app-code">onChange</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's <b>NavBarThemeSwitch</b> onChange listener.</td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
  );
}
export default ThemeSwitchProps;