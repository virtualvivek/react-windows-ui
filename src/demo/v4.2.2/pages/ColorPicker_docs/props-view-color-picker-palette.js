import React from "react";

const PropsViewColorPickerPalette = () => {
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
          <td><p className="app-code">color</p></td>
          <td>CSS Color</td>
          <td>"#eee"</td>
          <td>Set's ColorPickerPalette color prop.</td>
        </tr>
        <tr>
          <td><p className="app-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's ColorPickerPalette disabled state.</td>
        </tr>
        <tr>
          <td><p className="app-code">onChange</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's ColorPickerPalette onChange listener.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsViewColorPickerPalette;