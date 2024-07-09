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
          <td>Set's SliderBar access refrence object.</td>
        </tr>
        <tr>
          <td><p className="ui-code">step</p></td>
          <td>integer</td>
          <td>1</td>
          <td>Set's SliderBar step value.</td>
        </tr>
        <tr>
          <td><p className="ui-code">min</p></td>
          <td>integer</td>
          <td>1</td>
          <td>Set's SliderBar min value.</td>
        </tr>
        <tr>
          <td><p className="ui-code">max</p></td>
          <td>integer</td>
          <td>100</td>
          <td>Set's SliderBar max value.</td>
        </tr>
        <tr>
          <td><p className="ui-code">width</p></td>
          <td>CSSProperties</td>
          <td>140px</td>
          <td>Set's SliderBar container width.</td>
        </tr>
        <tr>
          <td><p className="ui-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's SliderBar hover tooltip.</td>
        </tr>
        {/* <tr>
          <td><p className="ui-code">thumbStyle</p></td>
          <td>"default" | "round" | "round-border"</td>
          <td>"default"</td>
          <td>Set's SliderBar thumb style.</td>
        </tr> */}
        <tr>
          <td><p className="ui-code">onChange</p></td>
          <td>function</td>
          <td>default</td>
          <td>Set's SliderBar onChange listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onDragStart</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's SliderBar onDragStart listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onDragEnd</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's SliderBar onDragEnd listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">defaultValue</p></td>
          <td>integer</td>
          <td>0</td>
          <td>Set's SliderBar default value.</td>
        </tr>
        <tr>
          <td><p className="ui-code">showPopupValue</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Toggle's SliderBar popup value visibility.</td>
        </tr>
        <tr>
          <td><p className="ui-code">orientation</p></td>
          <td>"vertical" | "horizontal"</td>
          <td>"horizontal"</td>
          <td>Toggle's SliderBar orientation.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView