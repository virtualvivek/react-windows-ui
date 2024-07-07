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
          <td><p className="ui-code">title</p></td>
          <td>string | ReactNode</td>
          <td>null</td>
          <td>Set's NavBar title.</td>
        </tr>
        <tr>
          <td><p className="ui-code">collapsed</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's NavBar as collapsed.</td>
        </tr>
        <tr>
          <td><p className="ui-code">children</p></td>
          <td>ReactNode</td>
          <td>[ ]</td>
          <td>Set's NavBar children.</td>
        </tr>
        <tr>
          <td><p className="ui-code">titleBarMobile</p></td>
          <td>ReactNode</td>
          <td>[ ]</td>
          <td>Set's NavBar top title bar on small device.</td>
        </tr>
        <tr>
          <td><p className="ui-code">shadowOnScroll</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's NavBar shadow on scroll.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView