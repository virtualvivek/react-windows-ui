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
          <td><p className="ui-code">setProgress</p></td>
          <td>integer | "indeterminate" | "hidden"</td>
          <td>0</td>
          <td>Set's ProgressBar progress.</td>
        </tr>
        <tr>
          <td><p className="ui-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ProgressBar title.</td>
        </tr>
        <tr>
          <td><p className="ui-code">subtitle</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ProgressBar subtitle.</td>
        </tr>
        <tr>
          <td><p className="ui-code">color</p></td>
          <td>CSS Color</td>
          <td>"color-primary"</td>
          <td>Set's ProgressBar progress color.</td>
        </tr>
        <tr>
          <td><p className="ui-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ProgressBar hover tooltip text.</td>
        </tr>
        <tr>
          <td><p className="ui-code">height</p></td>
          <td>integer | string</td>
          <td>"5px"</td>
          <td>Set's ProgressBar height.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView;