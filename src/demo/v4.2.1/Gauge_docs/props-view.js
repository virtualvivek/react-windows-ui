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
          <td>Set's Gauge </td>
        </tr>
        <tr>
          <td><p className="app-code">size</p></td>
          <td>integer</td>
          <td>140</td>
          <td>Set's Gauge width & height</td>
        </tr>
        <tr>
          <td><p className="app-code">valueUnit</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Gauge value unit</td>
        </tr>
        <tr>
          <td><p className="app-code">showValue</p></td>
          <td>boolean</td>
          <td>''</td>
          <td>Set's Gauge if value visible</td>
        </tr>
        <tr>
          <td><p className="app-code">valueColor</p></td>
          <td>CSS Color</td>
          <td>'color-text-dark'</td>
          <td>Set's Gauge inner value color</td>
        </tr>
        <tr>
          <td><p className="app-code">valueFontSize</p></td>
          <td>CSS fontSize</td>
          <td>null</td>
          <td>Set's Gauge value fontSize</td>
        </tr>
        <tr>
          <td><p className="app-code">info</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Gauge inner info text</td>
        </tr>
        <tr>
          <td><p className="app-code">infoFontSize</p></td>
          <td>CSS fontSize</td>
          <td>null</td>
          <td>Set's Gauge info fontSize</td>
        </tr>
        <tr>
          <td><p className="app-code">strokeColor</p></td>
          <td>CSS Color</td>
          <td>'color-primary'</td>
          <td>Set's Gauge progress ring color</td>
        </tr>
      
        <tr>
          <td><p className="app-code">backgroundColor</p></td>
          <td>CSS Color</td>
          <td>'system default'</td>
          <td>Set's Gauge background-ring/backround color</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView