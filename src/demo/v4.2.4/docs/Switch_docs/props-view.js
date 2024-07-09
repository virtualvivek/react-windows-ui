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
          <td>Set's Switch access refrence object.</td>
        </tr>
        <tr>
          <td><p className="ui-code">defaultChecked</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Switch default checked.</td>
        </tr>
        <tr>
          <td><p className="ui-code">labelOn</p></td>
          <td>string</td>
          <td>"On"</td>
          <td>Set's Switch label on.</td>
        </tr>
        <tr>
          <td><p className="ui-code">labelOff</p></td>
          <td>string</td>
          <td>"Off"</td>
          <td>Set's Switch label off</td>
        </tr>
        <tr>
          <td><p className="ui-code">labelFixedWidth</p></td>
          <td>integer | CSS Width</td>
          <td>system default</td>
          <td>Set's Switch label with a fixed width.</td>
        </tr>
        <tr>
          <td><p className="ui-code">labelPosition</p></td>
          <td>"start" | "end"</td>
          <td>"end"</td>
          <td>Set's Switch label position.</td>
        </tr>
        <tr>
          <td><p className="ui-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Switch disabled state.</td>
        </tr>
        <tr>
          <td><p className="ui-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Switch hover tooltip text.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onChange</p></td>
          <td>function</td>
          <td>default</td>
          <td>Set's Switch onChange event listener.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView;