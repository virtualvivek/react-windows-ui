import React from "react";

const TextAreaProps = () => {
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
          <td>Set's TextArea access refrence object.</td>
        </tr>
        <tr>
          <td><p className="app-code">value</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's TextArea value prop.</td>
        </tr>
        <tr>
          <td><p className="app-code">rows</p></td>
          <td>integer</td>
          <td>2</td>
          <td>Set's TextArea rows.</td>
        </tr>
        <tr>
          <td><p className="app-code">cols</p></td>
          <td>integer</td>
          <td>1</td>
          <td>Set's TextArea columns.</td>
        </tr>
        <tr>
          <td><p className="app-code">defaultValue</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's TextArea defaultValue.</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's TextArea hover tooltip.</td>
        </tr>
        <tr>
          <td><p className="app-code">resizer</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's TextArea resizer handle.</td>
        </tr>
        <tr>
          <td><p className="app-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's TextArea state disabled.</td>
        </tr>
        <tr>
          <td><p className="app-code">onChange</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td>Set's TextArea on Change listener.</td>
        </tr>
        <tr>
          <td><p className="app-code">onResize</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td>Set's TextArea on Resize listener.</td>
        </tr>
        <tr>
          <td><p className="app-code">placeholder</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's TextArea string.</td>
        </tr>
        <tr>
          <td><p className="app-code">resize</p></td>
          <td>"both" | "none" | "horizontal" | "vertical"</td>
          <td>"both"</td>
          <td>Set's TextArea children.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default TextAreaProps;