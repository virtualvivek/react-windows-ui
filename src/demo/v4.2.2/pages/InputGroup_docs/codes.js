const InputTextImportCode =
`import { InputText } from "react-windows-ui";`;

const InputTextUsageCode =
`<InputText
  clearButton={true}
  placeholder="Enter a text"
  tooltip="InputText tooltip title"
/>`;

const InputTextStatusUsageCode =
`<InputText
  setStatus="success"
  //setStatus="danger"
  //setStatus="loading"
  placeholder="Enter a text success"
/>`;

const InputTextPasswordUsageCode =
`<InputText
  type="password"
  placeholder="Enter a password"
/>`;

const InputTextLabelUsageCode =
`<InputText
  width={225}
  label="label"
  placeholder="Enter a text"
/>`;

const InputDateUsageCode =
`<InputText
  type="date"
  placeholder="Select Date"
  tooltip="InputDate tooltip title"
/>`;

const ExampleUsageCode =
`const [inputVal, setInputVal] = useState("Inputs");

const _onChange = (value) => {
  setInputVal(value);
  inputRef.current.value; // You can also fetch value this way.
}

return (
  <h1>{inputVal}</h1>

  <InputText
    ref={inputRef}
    clearButton={true}
    value={inputVal}
    onChange={(e) => _onChange(e.target.value)}
    // onClearButtonClick={() => {}}
  />
)`;



export {
  InputTextImportCode,
  InputTextUsageCode,
  InputTextStatusUsageCode,
  InputTextPasswordUsageCode,
  InputTextLabelUsageCode,
  InputDateUsageCode,
  ExampleUsageCode
}