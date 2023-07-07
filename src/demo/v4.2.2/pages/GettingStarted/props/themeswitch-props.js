import React from "react";

const ThemeSwitchProps = () => {
  return (
    <>
    <h2>Props</h2>
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
          <td><p className="app-code">onChange</p></td>
          <td>Function</td>
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