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
          <td><p className="ui-code">name</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Search name prop</td>
        </tr>
        <tr>
          <td><p className="ui-code">value</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Search value prop</td>
        </tr>
        <tr>
          <td><p className="ui-code">width</p></td>
          <td>CSS value</td>
          <td>system default</td>
          <td>Set's Search width prop</td>
        </tr>
        <tr>
          <td><p className="ui-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Search hover tooltip text</td>
        </tr>
        <tr>
          <td><p className="ui-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's Search if disabled</td>
        </tr>
        <tr>
          <td><p className="ui-code">placeholder</p></td>
          <td>string</td>
          <td>'search here..'</td>
          <td>Set's Search placeholder</td>
        </tr>
        <tr>
          <td><p className="ui-code">onClick</p></td>
          <td>function</td>
          <td>default</td>
          <td>onClick listener</td>
        </tr>
        <tr>
          <td><p className="ui-code">onChange</p></td>
          <td>function</td>
          <td>default</td>
          <td>onChange listener</td>
        </tr>
        <tr>
          <td><p className="ui-code">onKeyUp</p></td>
          <td>function</td>
          <td>default</td>
          <td>onKeyUp listener</td>
        </tr>
        <tr>
          <td><p className="ui-code">onKeyDown</p></td>
          <td>function</td>
          <td>default</td>
          <td>onKeyDown listener</td>
        </tr>
        <tr>
          <td><p className="ui-code">onSubmit</p></td>
          <td>function</td>
          <td>default</td>
          <td>onSubmit listener | For InputSearchBar</td>
        </tr>
        <tr>
          <td>
            <b>For {`<InputSearchSuggestion/>`}</b>
          </td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td><p className="ui-code">data ❑</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's Search data prop</td>
        </tr>
        <tr>
          <td><p className="ui-code">data ▶ label</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Search data item label</td>
        </tr>
        <tr>
          <td><p className="ui-code">data ▶ icon</p></td>
          <td>ReactNode | SVG | FontIcon</td>
          <td>null</td>
          <td>Set's Search data item icon</td>
        </tr>
        <tr>
          <td><p className="ui-code">data ▶ link</p></td>
          <td>href link string</td>
          <td>'#'</td>
          <td>Set's Search data item href</td>
        </tr>
        <tr>
          <td><p className="ui-code">data ▶ onClick</p></td>
          <td>function</td>
          <td>default</td>
          <td>Set's Search data item onClick</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView