import React from 'react'
import {Link} from '../../../../lib/src'

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
          <td><p className="app-code">hasPadding</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's NavPageContainer default horizontal padding,
            <br/>set to false if you want to render component with 100% view width.
            <br/>If <span class="app-code">false</span> use <b>{`<NavPageContainerInner />`}</b> to render child component with padding
          </td>
        </tr>
        <tr>
          <td><p className="app-code">animateTransition</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's NavPageContainer animate on visible
            <br/>when setting <b>{`<TransitionToLeft />`} 
            <br/><Link to="/AppJsDefault">View implementation
            <br/>of {`<TransitionToLeft />`}</Link></b>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView