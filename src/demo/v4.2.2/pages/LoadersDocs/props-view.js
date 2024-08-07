import React from "react";

const PropsView = () => {
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
          <td><p className="app-code">isLoading</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's LoaderBar, LoaderBusy loading state.</td>
        </tr>
        <tr>
          <td><p className="app-code">setTheme</p></td>
          <td>"default" | "light"</td>
          <td>"default"</td>
          <td>Set's LoaderBar, LoaderBusy color.</td>
        </tr>
        <tr>
          <td><p className="app-code">display</p></td>
          <td>"default" | "overlay"</td>
          <td>"default"</td>
          <td>Set's LoaderBusy screen mode.</td>
        </tr>
        <tr>
          <td><p className="app-code">backgroundColor</p></td>
          <td>CSS Color</td>
          <td>System default</td>
          <td>Set's LoaderBusy background-color | When display: overlay.</td>
        </tr>
        <tr>
          <td><p className="app-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's LoaderBusy title | When display: overlay.</td>
        </tr>
        <tr>
          <td><p className="app-code">onBackdropPress</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's LoaderBusy BackdropPress listener | When display: overlay.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView;