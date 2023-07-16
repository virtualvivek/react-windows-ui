import React from "react";

const PageContainerProps = () => {
  return (
    <>
    <h2>Props</h2>
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
          <td><p className="app-code">style</p></td>
          <td>CSSProperties</td>
          <td>{`{ }`}</td>
          <td>Set's <b>NavPageContainer</b> container styles.</td>
        </tr>
        <tr>
          <td><p className="app-code">hasPadding</p></td>
          <td>boolean</td>
          <td>true</td>
          <td>Set's if having <b>NavPageContainer</b> default padding,
            <br/>Set to false if you want to render component with 100% view width.
          </td>
        </tr>
        <tr>
          <td><p className="app-code">animateTransition</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Animate <b>NavPageContainer</b> on mount transition.</td>
        </tr>
        <tr>
          <td><p className="app-code">backgroundColor</p></td>
          <td>CSSProperties</td>
          <td>system default</td>
          <td>Set's <b>NavPageContainer</b> backgroundColor.</td>
        </tr>
        <tr>
          <td><p className="app-code">scrollTopOnMount</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's <b>NavPageContainer</b> Scroll to top on mount.</td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
  );
}
export default PageContainerProps;