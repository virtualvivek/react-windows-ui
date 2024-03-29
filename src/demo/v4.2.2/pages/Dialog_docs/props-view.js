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
          <td><p className="app-code">ref</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's Dialog refrence object..</td>
        </tr>
        <tr>
          <td><p className="app-code">isVisible</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Dialog visibility.</td>
        </tr>
        <tr>
          <td><p className="app-code">style</p></td>
          <td>CSSProperties</td>
          <td>{`{ }`}</td>
          <td>Container styles for Dialog, Dialog.<b>Header</b>, Dialog.<b>Body</b>, Dialog.<b>Footer</b>.</td>
        </tr>
        <tr>
          <td><p className="app-code">onBackdropPress</p></td>
          <td>function</td>
          <td>null</td>
          <td>Callback on backdrop press.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView;