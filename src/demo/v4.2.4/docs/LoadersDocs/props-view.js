import React from "react";

const PropsView = () => {
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
          <td><p className="ui-code">size</p></td>
          <td>string</td>
          <td>"small" | "default" | "large"</td>
          <td>Set's LoaderBusy size.</td>
        </tr>
        <tr>
          <td><p className="ui-code">isLoading</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's LoaderBar, LoaderBusy loading state.</td>
        </tr>
        <tr>
          <td><p className="ui-code">setTheme</p></td>
          <td>"default" | "light"</td>
          <td>"default"</td>
          <td>Set's LoaderBar, LoaderBusy color.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView;