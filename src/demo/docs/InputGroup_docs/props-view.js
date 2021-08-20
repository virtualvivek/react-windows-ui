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
          <td><p className="app-code">placeholder</p></td>
          <td>string</td>
          <td>'Enter a text'</td>
          <td>Set's Input placeholder</td>
        </tr>
        <tr>
          <td><p className="app-code">value</p></td>
          <td>input values</td>
          <td>null</td>
          <td>Set's Input value prop</td>
        </tr>
        <tr>
          <td><p className="app-code">type</p></td>
          <td>text &nbsp;&nbsp;&nbsp;&nbsp;| password <br/>
              date &nbsp;&nbsp;&nbsp;| time <br/>
              month | datetime-local</td>
          <td>text</td>
          <td>Set's Input type</td>
        </tr>
        <tr>
          <td><p className="app-code">label</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's Input label text</td>
        </tr>
        <tr>
          <td><p className="app-code">setStatus</p></td>
          <td>'default' | 'success' <br/> 'danger' | 'loading'</td>
          <td>'default'</td>
          <td>Set's Input status</td>
        </tr>
        <tr>
          <td><p className="app-code">ref</p></td>
          <td>function</td>
          <td>null</td>
          <td>Set's Input refrence value</td>
        </tr>
        <tr>
          <td><p className="app-code">width</p></td>
          <td>CSS Property</td>
          <td>'270px'</td>
          <td>Set's Input background-ring/backround color</td>
        </tr>
        <tr>
          <td><p className="app-code">onChange</p></td>
          <td>object</td>
          <td>null</td>
          <td>Set's Input on Change listener</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView