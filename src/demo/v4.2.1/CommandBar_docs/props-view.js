import React from 'react'

const PropsView = () => {
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
          <td><p className="app-code">style</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's CommandBar container style.</td>
        </tr>

        <br/><tr><td><b>CommandBar.Button</b></td><td></td><td></td><td></td></tr>
        <tr>
          <td><p className="app-code">value</p></td>
          <td>string</td>
          <td>"Value"</td>
          <td>Set's CommandBar text</td>
        </tr>
        <tr>
          <td><p className="app-code">icon</p></td>
          <td>ReactNode | SVG | JSX</td>
          <td>null</td>
          <td>Set's CommandBar text icon</td>
        </tr>
        <tr>
          <td><p className="app-code">onClick</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's CommandBar onClick listener</td>
        </tr>


        <br/><tr><td><b>CommandBar.Menu</b></td><td></td><td></td><td></td></tr>
        <tr>
          <td><p className="app-code">menuDirection</p></td>
          <td>"rightJustify" | "leftJustify"</td>
          <td>"rightJustify"</td>
          <td>Set's CommandBar value disabled prop</td>
        </tr>


        <br/><tr><td><b>CommandBar.MenuItem,<br/>CommandBar.MenuSubItem</b></td><td></td><td></td><td></td></tr>
        <tr>
          <td><p className="app-code">label</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's CommandBar data disabled prop</td>
        </tr>
        <tr>
          <td><p className="app-code">icon</p></td>
          <td>ReactNode | SVG | JSX</td>
          <td>null</td>
          <td>Set's CommandBar text icon</td>
        </tr>
        <tr>
          <td><p className="app-code">onClick</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's CommandBar onClick listener</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView