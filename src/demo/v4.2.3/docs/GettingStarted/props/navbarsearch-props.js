import React from "react";

const NavBarSearchProps = () => {
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
          <td><p className="app-code">value</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's <b>SearchBar</b> value prop.</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's <b>SearchBar</b> hover tooltip text.</td>
        </tr>
        <tr>
          <td><p className="app-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's <b>SearchBar</b> if disabled.</td>
        </tr>
        <tr>
          <td><p className="app-code">placeholder</p></td>
          <td>string</td>
          <td>"Search here.."</td>
          <td>Set's <b>SearchBar</b> placeholder.</td>
        </tr>
        <tr>
          <td><p className="app-code">onChange</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td><b>SearchBar</b> onChange listener.</td>
        </tr>
        <tr>
          <td><p className="app-code">onClick</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td><b>SearchBar</b> onClick listener.</td>
        </tr>
        <tr>
          <td><p className="app-code">onKeyUp</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td><b>SearchBar</b> onKeyUp listener.</td>
        </tr>
        <tr>
          <td><p className="app-code">onKeyDown</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td><b>SearchBar</b> onKeyDown listener.</td>
        </tr>
        <tr>
          <td><p className="app-code">onSubmit</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td><b>SearchBar</b> onSubmit listener | For InputSearchBar</td>
        </tr>
        <tr>
          <td><p className="app-code">suggest ❑</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's <b>SearchBar</b> suggest prop.</td>
        </tr>
        <tr>
          <td><p className="app-code">suggest ▶ text</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's <b>SearchBar</b> suggest item text.</td>
        </tr>
        <tr>
          <td><p className="app-code">suggest ▶ icon</p></td>
          <td>ReactNode | SVG | FontIcon</td>
          <td>null</td>
          <td>Set's <b>SearchBar</b> suggest item icon.</td>
        </tr>
        <tr>
          <td><p className="app-code">suggest ▶ onClick</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's <b>SearchBar</b> suggest item onClick.</td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
  );
}
export default NavBarSearchProps;