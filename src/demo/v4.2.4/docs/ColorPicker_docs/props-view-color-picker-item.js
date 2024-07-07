import React from "react";

const PropsViewColorPickerItem = () => {
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
          <td><p className="ui-code">name</p></td>
          <td>any</td>
          <td>""</td>
          <td>Specify ColorPickerItem group name prop.</td>
        </tr>
        <tr>
          <td><p className="ui-code">color</p></td>
          <td>CSS Color</td>
          <td>"#eee"</td>
          <td>Set's ColorPickerItem color prop.</td>
        </tr>
        <tr>
          <td><p className="ui-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's ColorPickerItem disabled state.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onChange</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's ColorPickerItem onChange listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">defaultChecked</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's ColorPickerItem checked prop.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsViewColorPickerItem;