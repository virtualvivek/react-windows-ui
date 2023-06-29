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
          <td><p className="app-code">headerTitle</p></td>
          <td>string</td>
          <td>""</td>
          <td>Set's accordion title if not using custom Header.</td>
        </tr>
        <tr>
          <td><p className="app-code">headerStyle</p></td>
          <td>CSSProperties</td>
          <td>{`{ }`}</td>
          <td>Set's accordion container style.</td>
        </tr>
        <tr>
          <td><p className="app-code">onCollapse()</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's accordion onCollapse listener.</td>
        </tr>
        <tr>
          <td><p className="app-code">onExpand()</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's accordion onExpand listener.</td>
        </tr>
        <tr>
          <td><p className="app-code">Accordion.<b>Header</b></p></td>
          <td>ReactNode</td>
          <td>[ ]</td>
          <td>Set's accordion custom header component.</td>
        </tr>
        <tr>
          <td><p className="app-code">Accordion.<b>Body</b></p></td>
          <td>ReactNode</td>
          <td>[ ]</td>
          <td>Set's accordion panel component.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView