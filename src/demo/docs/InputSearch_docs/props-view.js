import React from 'react'

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
          <td><p className="app-code">placeholder</p></td>
          <td>string</td>
          <td>'search here..'</td>
          <td>Set's Search placeholder</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Search hover tooltip text</td>
        </tr>
        <tr>
          <td><p className="app-code">name</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Search name prop</td>
        </tr>
        <tr>
          <td><p className="app-code">value</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Search value prop</td>
        </tr>
        <tr>
          <td><p className="app-code">onSubmit</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's Search onSubmit | For InputSearchBar</td>
        </tr>
        <tr>
          <td><p className="app-code">onChange</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's Search onChange | For InputSearchBox</td>
        </tr>
        <tr>
          <td><p className="app-code">data</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's Search data prop | For InputSearchSuggestion</td>
        </tr>
        <tr>
          <td><p className="app-code">data ▶ label</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Search data item label | For InputSearchSuggestion</td>
        </tr>
        <tr>
          <td><p className="app-code">data ▶ icon</p></td>
          <td>ReactNode | SVG | FontIcon</td>
          <td>null</td>
          <td>Set's Search data item icon | For InputSearchSuggestion</td>
        </tr>
        <tr>
          <td><p className="app-code">data ▶ link</p></td>
          <td>href link string</td>
          <td>'#'</td>
          <td>Set's Search data item href | For InputSearchSuggestion</td>
        </tr>
        <tr>
          <td><p className="app-code">data ▶ onClick</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's Search data item onClick</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView