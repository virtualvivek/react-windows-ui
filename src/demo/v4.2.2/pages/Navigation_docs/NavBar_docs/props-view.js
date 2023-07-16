import React from 'react'

const PropsView = () => {
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
          <td><p className="app-code">title</p></td>
          <td>string | ReactNode</td>
          <td>null</td>
          <td>Set's NavBar title.</td>
        </tr>
        <tr>
          <td><p className="app-code">collapsed</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's NavBar as collapsed.</td>
        </tr>
        <tr>
          <td><p className="app-code">children</p></td>
          <td>ReactNode</td>
          <td>[ ]</td>
          <td>Set's NavBar children.</td>
        </tr>
        <tr>
          <td><p className="app-code">titleBarMobile</p></td>
          <td>ReactNode</td>
          <td>[ ]</td>
          <td>Set's NavBar top title bar on small device.</td>
        </tr>
        <tr>
          <td><p className="app-code">shadowOnScroll</p></td>
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