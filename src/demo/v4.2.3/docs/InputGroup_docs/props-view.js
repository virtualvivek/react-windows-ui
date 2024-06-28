import React from 'react'

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
          <td>Set's Input access refrence object.</td>
        </tr>
        <tr>
          <td><p className="ui-code">value</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Input value prop.</td>
        </tr>
        <tr>
          <td><p className="ui-code">type</p></td>
          <td>"text" | "password"</td>
          <td>"text"</td>
          <td>Set's Input type.</td>
        </tr>
        <tr>
          <td><p className="ui-code">width</p></td>
          <td>CSSProperties</td>
          <td>"270px"</td>
          <td>Set's Input container width.</td>
        </tr>
        <tr>
          <td><p className="ui-code">label</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Input label text.</td>
        </tr>
        <tr>
          <td><p className="ui-code">defaultValue</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Input defaultValue.</td>
        </tr>
        <tr>
          <td><p className="ui-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Input state disabled.</td>
        </tr>
        <tr>
          <td><p className="ui-code">clearButton</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Input has clear button.</td>
        </tr>
        <tr>
          <td><p className="ui-code">setStatus</p></td>
          <td>"default" | "success" <br/> "danger" | "loading"</td>
          <td>"default"</td>
          <td>Set's Input status.</td>
        </tr>
        <tr>
          <td><p className="ui-code">placeholder</p></td>
          <td>string</td>
          <td>"Enter a text"</td>
          <td>Set's Input placeholder.</td>
        </tr>
        <tr>
          <td><p className="ui-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Input hover tooltip.</td>
        </tr>
        <tr>
          <td><p className="ui-code">autoFocus</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Input focused on Page Mount.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onFocus</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td>Set's Input onFocus event listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">readOnly</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Input if readOnly.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onChange</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td>Set's Input on Change listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onClick</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td>Set's Input on Click listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onKeyUp</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td>Set's Input on KeyUp listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onKeyDown</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td>Set's Input on KeyDown listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onClearButtonClick</p></td>
          <td>function</td>
          <td>[ ]</td>
          <td>Set's Input onClearButtonClick listener.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView