const SwitchCode =
`<Switch
 defaultChecked={true}
 labelOn="On"
 labelOff="Off"
 onChange={() => {}}
 //disabled
 //tooltip="tooltip title"
/>`;
 
const SliderBarCode =
`<SliderBar
 defaultValue={this.state.value}
 thumbStyle="round"
 //thumbStyle="round-border"
 step={1}
 showValue={true}
 onChange={() => {}}
 //tooltip="tooltip title"
/>`;

const CheckboxCode =
`<Checkbox
 defaultChecked={true}
 label="Text"
 onChange={() => {}}
 //disabled
 //tooltip="tooltip title"
/>`;

const InputTextCode =
`<InputText
 placeholder="Enter a text"
 onChange={() => {}}
 //setStatus="success"
 //setStatus="danger"
 //setStatus="loading"
 //tooltip="tooltip title"
/>`;

const InputPasswordCode =
`<InputText
 type="password"
 placeholder="Enter password"
 onChange={() => {}}
 //tooltip="tooltip title"
/>`;

const InputLabelCode =
`<InputText
 width={225}
 label="label text"
 placeholder="Enter a text"
 onChange={() => {}}
/>`;

const InputDateCode =
`<InputDate
 placeholder="Select Date"
 onChange={() => {}}
 //tooltip="tooltip title"
/>`;

const InputSearchBarCode =
`<InputSearchBar
 placeholder="Search here"
 onSubmit={() => {}}
 //tooltip="tooltip title"
/>`;

const InputSearchBoxCode =
`<InputSearchBox
 placeholder="Enter to Search"
 onChange={() => {}}
 //tooltip="tooltip title"
/>`;

const InputSearchSuggestionCode =
`<InputSearchSuggestion
 placeholder="Type 'a' .."
 data={[
  {label: 'apple', link: '#', icon:<i className="icons10-baby"></i>},
  {label: 'orange', link: '#',onClick:this.function},
  {label: 'banana', link: '#'},
  {label: 'peach', link: '#'},
  ]}
  //tooltip="tooltip title"
/>`;

const SelectBoxCode =
`<SelectBox
 data={[
  {label: 'red', value: 'red'},
  {label: 'blue', value: 'blue'},
  {label: 'green', value: 'green'},
  {label: 'pink', value: 'pink'},
  ]}
/>`;

const MenuBarCode =
`<MenuBar
 label="Select a fruit"
 data={[
  {label: 'apple', link: '#', icon:<i className="icons10-camera"></i>},
  {label: 'orange', link: '#',onClick:this.function},
  {label: 'banana', link: '#'},
  {label: 'peach', link: '#'},
  ]}
/>`;

const RadioButtonCode =
`<RadioButton
 defaultChecked={true}
 name="2"
 label="some text"
 //disabled
 //tooltip="tooltip title"
/>`;

export {
    SwitchCode,
    SliderBarCode,
    CheckboxCode,
    InputTextCode,
    InputPasswordCode,
    InputLabelCode,
    InputDateCode,
    InputSearchBarCode,
    InputSearchBoxCode,
    InputSearchSuggestionCode,
    SelectBoxCode,
    MenuBarCode,
    RadioButtonCode
}