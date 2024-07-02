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
          <td><p className="ui-code">headerTitle</p></td>
          <td>string</td>
          <td>""</td>
          <td>Set's accordion title if not using custom Header.</td>
        </tr>
        <tr>
          <td><p className="ui-code">headerStyle</p></td>
          <td>CSSProperties</td>
          <td>{`{ }`}</td>
          <td>Set's accordion container style.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onCollapse()</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's accordion onCollapse listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onExpand()</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's accordion onExpand listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">Accordion.<b>Trigger</b></p></td>
          <td>ReactNode</td>
          <td>[ ]</td>
          <td>Set's accordion custom trigger component.</td>
        </tr>
        <tr>
          <td><p className="ui-code">Accordion.<b>Body</b></p></td>
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