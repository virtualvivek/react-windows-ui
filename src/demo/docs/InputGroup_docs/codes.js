const InputTextImportCode =
`import { InputText } from 'react-windows-ui'`;

const InputTextUsageCode =
`<InputText
  placeholder="Enter a text"
  tooltip="InputText tooltip title"
/>`;

const InputTextStatusUsageCode =
`<InputText
  placeholder="Enter a text success"
  setStatus="success"
  //setStatus="danger"
  //setStatus="loading"
/>`;

const InputTextPasswordUsageCode =
`<InputText
  type="password"
  placeholder="Enter a password"
/>`;

const InputTextLabelUsageCode =
`<InputText
  label="label"
  width={225}
  placeholder="Enter a text"
/>`;

const InputDateUsageCode =
`<InputText
  type="date"
  placeholder="Select Date"
  tooltip="InputDate tooltip title"
/>`;


export {
  InputTextImportCode,
  InputTextUsageCode,
  InputTextStatusUsageCode,
  InputTextPasswordUsageCode,
  InputTextLabelUsageCode,
  InputDateUsageCode
}