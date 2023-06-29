const AccordionImportCode =
`import { Accordion } from "react-windows-ui";`;

const AccordionUsageCode =
`<Accordion
  headerTitle="Some Title"
  headerStyle={{width: "250px"}}>
  <Accordion.Body>
    <p style={{width: "270px"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </Accordion.Body>
</Accordion>
`;

const AccordionUsageFocusedFalseCode =
`<Accordion>
  <Accordion.Header>
    <Button value="Click"/>
  </Accordion.Header>
  <Accordion.Body>
    <p style={{width: "270px"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </Accordion.Body>
</Accordion>
`;

export {
  AccordionImportCode,
  AccordionUsageCode,
  AccordionUsageFocusedFalseCode
}