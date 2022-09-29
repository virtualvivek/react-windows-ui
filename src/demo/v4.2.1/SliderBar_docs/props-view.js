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
          <td><p className="app-code">step</p></td>
          <td>integer</td>
          <td>1</td>
          <td>Set's SliderBar step value</td>
        </tr>
        <tr>
          <td><p className="app-code">min</p></td>
          <td>integer</td>
          <td>1</td>
          <td>Set's SliderBar min value</td>
        </tr>
        <tr>
          <td><p className="app-code">max</p></td>
          <td>integer</td>
          <td>500</td>
          <td>Set's SliderBar max value</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's SliderBar hover tooltip</td>
        </tr>
        <tr>
          <td><p className="app-code">thumbStyle</p></td>
          <td>'default' | 'round' | 'round-border'</td>
          <td>'default'</td>
          <td>Set's SliderBar thumb style</td>
        </tr>
        <tr>
          <td><p className="app-code">onChange</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's SliderBar onChange listener</td>
        </tr>
        <tr>
          <td><p className="app-code">showValue</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Toggle's SliderBar value visibility</td>
        </tr>
        <tr>
          <td><p className="app-code">defaultValue</p></td>
          <td>integer</td>
          <td>0</td>
          <td>Set's SliderBar default value</td>
        </tr>
        <tr>
          <td><p className="app-code">showPopupValue</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Toggle's SliderBar popup value visibility</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView