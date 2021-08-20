const CheckboxImportCode =
`import { Checkbox } from 'react-windows-ui'`;

const CheckboxUsageCode =
`<Checkbox
  defaultChecked={true}
  label="Some Text"
  onChange={() => {}}
  //disabled
/>`;

const CheckboxInlineUsageCode =
`<p>Lorem ipsum dolor sit amet 
  <Checkbox
    defaultChecked={true}
    onChange={() => {}}
    tooltip="inline checkbox"
  /> 
sed do eiusmod tempor incididunt ut labore.
</p>`;


export {
    CheckboxImportCode,
    CheckboxUsageCode,
    CheckboxInlineUsageCode
}