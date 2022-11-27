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
          <td><p className="app-code">style</p></td>
          <td>CSS Style Object</td>
          <td>[ ]</td>
          <td>Set's NavPageContainer container styles.</td>
        </tr>
        <tr>
          <td><p className="app-code">hasPadding</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's NavPageContainer default horizontal padding,
            <br/>set to false if you want to render component with 100% view width.
            <br/>If <span className="app-code">false</span> use <b>{`<NavPageContainer.Inner />`}</b> to render child component with padding.
          </td>
        </tr>
        <tr>
          <td><p className="app-code">animateTransition</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Animate NavPageContainer on transition.</td>
        </tr>
        <tr>
          <td><p className="app-code">backgroundColor</p></td>
          <td>CSS Property</td>
          <td>system default</td>
          <td>Set's NavPageContainer backgroundColor.</td>
        </tr>
        <tr>
          <td><p className="app-code">scrollTopOnMount</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's NavPageContainer Scroll to top on mount.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView