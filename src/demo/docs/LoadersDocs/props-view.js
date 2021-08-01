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
          <td><p className="app-code">isLoading</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's LoaderBar, LoaderBusy loading state</td>
        </tr>
        <tr>
          <td><p className="app-code">setTheme</p></td>
          <td>'default' | 'light'</td>
          <td>'default'</td>
          <td>Set's LoaderBar, LoaderBusy color</td>
        </tr>
        <tr>
          <td><p className="app-code">display</p></td>
          <td>'default' | 'fullscreen'</td>
          <td>'default'</td>
          <td>Set's LoaderBusy screen mode</td>
        </tr>
        <tr>
          <td><p className="app-code">backgroundColor</p></td>
          <td>CSS Color</td>
          <td>'light-grey-alpha'</td>
          <td>Set's LoaderBusy fullscreen background-color</td>
        </tr>
        <tr>
          <td><p className="app-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's LoaderBusy fullscreen title</td>
        </tr>
        <tr>
          <td><p className="app-code">onBackdropPress</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's LoaderBusy fullscreen backdrop press callback</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView