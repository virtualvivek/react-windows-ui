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
          <td><p className="app-code">setProgress</p></td>
          <td>integer</td>
          <td>0</td>
          <td>Set's ProgressBar progress</td>
        </tr>
        <tr>
          <td><p className="app-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ProgressBar title</td>
        </tr>
        <tr>
          <td><p className="app-code">subtitle</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ProgressBar subtitle</td>
        </tr>
        <tr>
          <td><p className="app-code">icon</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's ProgressBar icon</td>
        </tr>
        <tr>
          <td><p className="app-code">showIcon</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Toggle ProgressBar icon visibility</td>
        </tr>
        <tr>
          <td><p className="app-code">color</p></td>
          <td>CSS Color</td>
          <td>'color-primary'</td>
          <td>Set's ProgressBar progress color</td>
        </tr>
        <tr>
          <td><p className="app-code">height</p></td>
          <td>integer | string</td>
          <td>'5px'</td>
          <td>Set's ProgressBar height</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's ProgressBar hover tooltip text</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView