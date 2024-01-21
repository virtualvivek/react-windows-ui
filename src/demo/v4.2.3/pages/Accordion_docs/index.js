import React from 'react'
import { NavPageContainer, Accordion, Button } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AccordionImportCode, AccordionUsageCode,
  AccordionUsageFocusedFalseCode } from './codes'
import PropsView from './props-view'

const AccordionDocs = () => {
  return (
    <NavPageContainer
      hasPadding
      animateTransition
      overscroll>
      <h1>Accordion</h1>

      <p><span className="app-color-primary">
        Accordion</span> component is used to show (and hide) content, it collapsed on hide and expand on show state.
      </p>
      

      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AccordionImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <Accordion
        headerTitle="Some Title"
        headerStyle={{width: "250px"}}>
        <Accordion.Body>
          <p style={{width: "270px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          </p>
        </Accordion.Body>
      </Accordion>

      <br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AccordionUsageCode}
      </SyntaxHighlighter>

      <h3 className="m-tb-20">Accordion with <p className="app-code">Custom Header</p> :</h3>

      <Accordion>
        <Accordion.Header>
          <Button value="Click"/>
        </Accordion.Header>
        <Accordion.Body>
          <p style={{width: "270px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam.
          </p>
        </Accordion.Body>
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


    <br/><br/><br/><br/><br/><br/><br/>
    </NavPageContainer>
  );
}

export default AccordionDocs