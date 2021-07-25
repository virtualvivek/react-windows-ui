import React from 'react'
import { NavPageContainer, Accordion } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AccordionImportCode, AccordionUsageCode,
  AccordionUsageFocusedFalseCode } from './codes'
import PropsView from './props-view'

const AccordionDocs = () => {
  return (
    <NavPageContainer hasPadding animateTransition>
      <h1>Accordion</h1>

      <p><span className="color-primary">Accordion</span> component is used to show (and hide) content, it collapsed on hide and expand on show state.</p>

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

      <h3 className="m-tb-20">Accordion <p className="app-code">focused false</p></h3>

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
      <PropsView/>


    <br/><br/><br/><br/><br/>
    </NavPageContainer>
  );
}

export default AccordionDocs