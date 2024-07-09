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
          <td><p className="ui-code">ref</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's Dialog refrence object..</td>
        </tr>
        <tr>
          <td><p className="ui-code">isVisible</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Dialog visibility.</td>
        </tr>
        <tr>
          <td><p className="ui-code">style</p></td>
          <td>CSSProperties</td>
          <td>{`{ }`}</td>
          <td>Container styles for Dialog, Dialog.<b>Header</b>, Dialog.<b>Body</b>, Dialog.<b>Footer</b>.</td>
        </tr>
        <tr>
          <td><p className="ui-code">Dialog.<b>Body</b></p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's the dialog header children.</td>
        </tr>
        <tr>
          <td><p className="ui-code">Dialog.<b>Footer</b></p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's the dialog footer children.</td>
        </tr>
        <tr>
          <td><p className="ui-code">ref.<b>open()</b></p></td>
          <td>function</td>
          <td>default</td>
          <td>Set's dialog open using ref.</td>
        </tr>
        <tr>
          <td><p className="ui-code">ref.<b>close()</b></p></td>
          <td>function</td>
          <td>default</td>
          <td>Set's dialog close using ref.</td>
        </tr>
        <tr>
          <td><p className="ui-code">backdropBlur</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's dialog backdrop blur.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onBackdropPress</p></td>
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