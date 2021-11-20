const SelectImportCode =
`import { Select } from 'react-windows-ui'`;

const SelectBoxImportCode =
`import { SelectBox } from 'react-windows-ui'`;

const SelectUsageCode =
`<Select
  defaultValue="blue" //Optional
  onChange={(value)=> alert(value)}
  data={[
    {label: 'red', value: 'red'},
    {label: 'blue', value: 'blue'},
    {label: 'green', value: 'green'},
    {label: 'pink', value: 'pink'},
  ]}
/>`;

const SelectBoxUsageCode =
`<SelectBox
  name="Some Name"
  data={[
    {label: 'red', value: 'red'},
    {label: 'blue', value: 'blue'},
    {label: 'green', value: 'green'},
    {label: 'pink', value: 'pink'},
  ]}
/>`;


export {
  SelectImportCode,
  SelectUsageCode,
  SelectBoxImportCode,
  SelectBoxUsageCode
}