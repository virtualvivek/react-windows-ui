import React from "react";

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
          <td><p className="app-code">isVisible</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Dialog visibility</td>
        </tr>
        <tr>
          <td><p className="app-code">style</p></td>
          <td>CSSProperties</td>
          <td>{`{ }`}</td>
          <td>Container styles for {`<Dialog>`}, {`<Dialog.Header>`}, {`<Dialog.Body>`}, {`<Dialog.Footer>`}</td>
        </tr>
        <tr>
          <td><p className="app-code">onBackdropPress</p></td>
          <td>function</td>
          <td>null</td>
          <td>Callback on backdrop press</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView;