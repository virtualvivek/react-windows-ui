const AccordionImportCode =
`import { Accordion } from "react-windows-ui";`;

const AccordionUsageCode =
`<Accordion headerTitle="Some Title" style={{width: "280px"}}>
  <Accordion.Panel>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.
    </p>
  </Accordion.Panel>
</Accordion>
`;

const AccordionUsageFocusedFalseCode =
`<Accordion
  style={{width: "270px"}}
  onCollapse={() => {}}
  onExpand={() => {}}>
  <Accordion.Header>
    <LinkCompound
      to="#"
      title="User preferences and uploads"
      subtitle="Profile pictures and details"
    />
  </Accordion.Header>
  <Accordion.Panel>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam.
    </p>
  </Accordion.Panel>
</Accordion>
`;

export {
  AccordionImportCode,
  AccordionUsageCode,
  AccordionUsageFocusedFalseCode
}