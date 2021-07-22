import React from 'react'
import { NavPageContainer, Accordion } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AccordionImportCode, AccordionUsageCode,
  AccordionUsageFocusedFalseCode } from './codes'

const Switch_ = () => {
  return (
    <NavPageContainer hasPadding>
      <h1>Accordion</h1>

      <Accordion focused title="Some Title">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </Accordion>

      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AccordionImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <Accordion focused title="Some Title">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </Accordion>
      <br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AccordionUsageCode}
      </SyntaxHighlighter>

      <h3 className="m-tb-20">Accordion focused false</h3>

      <Accordion focused={false} title="Some Title">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </Accordion>
      <br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AccordionUsageFocusedFalseCode}
      </SyntaxHighlighter>


      <h2>Props</h2>
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
            <td><p className="app-code">title</p></td>
            <td>string</td>
            <td>null</td>
            <td>Sets the accordion title</td>
          </tr>
          <tr>
            <td><p className="app-code">focused</p></td>
            <td>boolean</td>
            <td>true</td>
            <td>Sets the accordion background focused</td>
          </tr>
          <tr>
            <td><p className="app-code">children</p></td>
            <td>ReactNode</td>
            <td>null</td>
            <td>Sets the accordion children</td>
          </tr>
        </tbody>
      </table>


    <br/><br/><br/><br/><br/>
    </NavPageContainer>
  );
}

export default Switch_