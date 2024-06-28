import React from "react";

const ThemeSwitchProps = () => {
  return (
    <>
    <h2>Props</h2>
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
          <td><p className="ui-code">onChange</p></td>
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