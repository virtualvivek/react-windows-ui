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

const InputSearchBarUsageCode =
`import { InputSearchBar } from "react-windows-ui";

<InputSearchBar
  placeholder="Search here"
  onSubmit={(e) => { function(e.target.value) }}
  onChange={(e) => { function(e.target.value) }}
/>`;

const InputSearchBoxUsageCode =
`import { InputSearchBox } from "react-windows-ui";

<InputSearchBox
  placeholder="Enter to Search"
  onChange={(e) => { function(e.target.value) }}
/>

<InputSearchBox
  placeholder="Enter with Suggestions"
  suggest={[
    {text: "apple", onClick: () => {}, icon: <i className="icons10-home"></i>},
    {text: "orange", onClick: () => {}},
    {text: "banana", onClick: () => {}},
    {text: "peach", onClick: () => {}}
  ]}
/>`;

const InputTextAreaUsageCode =
`import { TextArea } from "react-windows-ui";

<TextArea
  resizer={false}
  defaultValue={"Hello World"}
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
  />
)`;



export {
  InputTextImportCode,
  InputTextUsageCode,
  InputTextStatusUsageCode,
  InputTextPasswordUsageCode,
  InputTextLabelUsageCode,
  InputDateUsageCode,
  InputTextAreaUsageCode,
  InputSearchBarUsageCode,
  InputSearchBoxUsageCode,
  ExampleUsageCode
}