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
          <td><p className="app-code">value</p></td>
          <td>string</td>
          <td>Submit</td>
          <td>Set's button title text</td>
        </tr>
        <tr>
          <td><p className="app-code">icon</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's button left icon</td>
        </tr>
        <tr>
          <td><p className="app-code">isLoading</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's button loading state</td>
        </tr>
        <tr>
          <td><p className="app-code">type</p></td>
          <td>default<br/>primary/primary-outline<br/>success/success-outline<br/>danger/danger-outline</td>
          <td>default</td>
          <td>Set's button type</td>
        </tr>
        <tr>
          <td><p className="app-code">textAlign</p></td>
          <td>center/start</td>
          <td>center</td>
          <td>Set's button text alignment</td>
        </tr>
        <tr>
          <td><p className="app-code">style</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's button styles</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's button hover tooltip</td>
        </tr>
        <tr>
          <td><p className="app-code">onPress</p></td>
          <td>function</td>
          <td>undefined</td>
          <td>Button's onPress event listner</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView