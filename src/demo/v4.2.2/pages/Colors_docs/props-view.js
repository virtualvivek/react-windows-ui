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
          <td><p className="app-code">setProgress</p></td>
          <td>integer</td>
          <td>0</td>
          <td>Set's Gauge </td>
        </tr>
        <tr>
          <td><p className="app-code">scale</p></td>
          <td>float</td>
          <td>1</td>
          <td>Set's Gauge scale size</td>
        </tr>
        <tr>
          <td><p className="app-code">value</p></td>
          <td>integer | string</td>
          <td>null</td>
          <td>Set's Gauge inner value text</td>
        </tr>
        <tr>
          <td><p className="app-code">info</p></td>
          <td>integer | string</td>
          <td>null</td>
          <td>Set's Gauge inner info text</td>
        </tr>
        <tr>
          <td><p className="app-code">strokeColor</p></td>
          <td>CSS Color</td>
          <td>'color-primary'</td>
          <td>Set's Gauge progress ring color</td>
        </tr>
        <tr>
          <td><p className="app-code">valueColor</p></td>
          <td>CSS Color</td>
          <td>'color-text-dark'</td>
          <td>Set's Gauge inner value color</td>
        </tr>
        <tr>
          <td><p className="app-code">backgroundColor</p></td>
          <td>CSS Color</td>
          <td>'color-light-grey'</td>
          <td>Set's Gauge background-ring/backround color</td>
        </tr>
        <tr>
          <td><p className="app-code">type</p></td>
          <td>'default' | 'fill'</td>
          <td>'default'</td>
          <td>Set's Gauge background type</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView