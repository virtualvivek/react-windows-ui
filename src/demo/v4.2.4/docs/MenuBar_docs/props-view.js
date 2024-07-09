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
          <td>Set's MenuBar refrence object.</td>
        </tr>
        <tr>
          <td><p className="ui-code">anchorRef</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's MenuBar anchor refrence object.</td>
        </tr>
        <tr>
          <td><p className="ui-code">MenuBar.Item</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Render MenuBar item node.</td>
        </tr>
        <tr>
          <td><p className="ui-code">MenuBar.Item ▶ label</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's MenuBar item label.</td>
        </tr>
        <tr>
          <td><p className="ui-code">MenuBar.Item ▶ onClick</p></td>
          <td>function</td>
          <td>default</td>
          <td>Set's MenuBar item onClick listner.</td>
        </tr>
        <tr>
          <td><p className="ui-code">backdropBlur</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's MenuBar backdrop blur.</td>
        </tr>
        <tr>
          <td><p className="ui-code">MenuBar.Item.Divider</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Render MenuBar item dvider.</td>
        </tr>
        <tr>
          <td><p className="ui-code">MenuBar.Item.SubMenu</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Render MenuBar's SubMenu.</td>
        </tr>
        <tr>
          <td><p className="ui-code">MenuBar.Item.SubMenu ▶ label</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's SubMenu label.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView