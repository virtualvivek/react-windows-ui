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
          <td><p className="app-code">value</p></td>
          <td>string</td>
          <td>"Value"</td>
          <td>Set's CmdBarButton text</td>
        </tr>
        <tr>
          <td><p className="app-code">icon</p></td>
          <td>ReactNode | SVG | FontIcon</td>
          <td>null</td>
          <td>Set's CmdBarButton text icon</td>
        </tr>
        <tr>
          <td><p className="app-code">onClick</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's CmdBarButton onClick listener</td>
        </tr>
        <tr>
          <td><p className="app-code">valueDisabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's CmdBarButton value disabled prop</td>
        </tr>
        <tr>
          <td><p className="app-code">dataDisabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's CmdBarButton data disabled prop</td>
        </tr>
        <tr>
          <td><p className="app-code">data ❑</p></td>
          <td>object</td>
          <td>[ ]</td>
          <td>Set's CmdBarButton dropdown data</td>
        </tr>
        <tr>
          <td><p className="app-code">data {'▶'} label</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's CmdBarButton data item label</td>
        </tr>
        <tr>
          <td><p className="app-code">data {'▶'} icon</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's CmdBarButton data item icon</td>
        </tr>
        <tr>
          <td><p className="app-code">data {'▶'} onClick</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's CmdBarButton data item onClick listner</td>
        </tr>
        <tr>
          <td><p className="app-code">data {'▶'} link</p></td>
          <td>link href string</td>
          <td>'#'</td>
          <td>Set's CmdBarButton data item link</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView