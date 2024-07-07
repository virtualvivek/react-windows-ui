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
          <td>Set's button access refrence object.</td>
        </tr>
        <tr>
          <td><p className="ui-code">value</p></td>
          <td>string</td>
          <td>"Submit"</td>
          <td>Set's button title text.</td>
        </tr>
        <tr>
          <td><p className="ui-code">type</p></td>
          <td>"button" | "submit"</td>
          <td>"button"</td>
          <td>Set's button attr type.</td>
        </tr>
        <tr>
          <td><p className="ui-code">icon</p></td>
          <td>ReactNode | SVG | JSX</td>
          <td>null</td>
          <td>Set's button left icon.</td>
        </tr>
        
        <tr>
          <td><p className="ui-code">type</p></td>
          <td>
            "default" | "subtle"<br/>
            "primary" | "primary-outline"<br/>
            "success" | "success-outline"<br/>
            "danger" | "danger-outline"
          </td>
          <td>"default"</td>
          <td>Set's button type.</td>
        </tr>
        
        <tr>
          <td><p className="ui-code">style</p></td>
          <td>CSSProperties</td>
          <td>{`{ }`}</td>
          <td>Set's button container styles.</td>
        </tr>
        <tr>
          <td><p className="ui-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's button hover tooltip.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onClick</p></td>
          <td>function</td>
          <td>null</td>
          <td>Button's onPress listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onSubmit</p></td>
          <td>function</td>
          <td>null</td>
          <td>Button's onSubmit listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">onDoubleClick</p></td>
          <td>function</td>
          <td>null</td>
          <td>Button's onDoubleClick listener.</td>
        </tr>
        <tr>
          <td><p className="ui-code">isLoading</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's button loading state.</td>
        </tr>
        <tr>
          <td><p className="ui-code">justifyContent</p></td>
          <td>CSSProperties</td>
          <td>"center"</td>
          <td>Set's button text alignment.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView