import React from "react";

const NavBarLink = () => {
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
            <td><p className="app-code">text</p></td>
            <td>string</td>
            <td>null</td>
            <td>Set's <b>NavBarItem</b> item text.</td>
          </tr>
          <tr>
            <td><p className="app-code">icon</p></td>
            <td>ReactNode | SVG | FontIcon</td>
            <td>null</td>
            <td>Set's <b>NavBarItem</b> icon.</td>
          </tr>
          <tr>
            <td><p className="app-code">onClick</p></td>
            <td>Function</td>
            <td>{`{ }`}</td>
            <td>Set's <b>NavBarItem</b> onClick listener.</td>
          </tr>
          <tr>
            <td><p className="app-code">imgSrc</p></td>
            <td>source</td>
            <td>null</td>
            <td>Set's <b>NavBarItem</b> image.</td>
          </tr>
          <tr>
            <td><p className="app-code">imgAlt</p></td>
            <td>string</td>
            <td>"image"</td>
            <td>Set's <b>NavBarItem</b> image alt text.</td>
          </tr>
          <tr>
            <td><p className="app-code">imgBorderRadius</p></td>
            <td>CSSProperties</td>
            <td>4px</td>
            <td>Set's <b>NavBarItem</b> image border radius.</td>
          </tr>
          <tr>
            <td><p className="app-code">showBadge</p></td>
            <td>boolean | integer | string</td>
            <td>false</td>
            <td>Set's <b>NavBarItem</b> badge.</td>
          </tr>
          <tr>
            <td><p className="app-code">badgeBackgroundColor</p></td>
            <td>CSS Color</td>
            <td>red</td>
            <td>Set's <b>NavBarItem</b> badge backgroundColor.</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
export default NavBarLink;