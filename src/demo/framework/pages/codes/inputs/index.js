const SwitchCode =
`<Switch
 checked={true}
 textOn="On"
 textOff="Off"
 onChange={() => {}}
 //disabled
/>`;
 
const SliderBarCode =
`<SliderBar
 value={this.state.value}
 thumbStyle="round"
 //thumbStyle="round-border"
 step={1}
 showValue={true}
 onChange={() => {}}
/>`;

const CheckboxCode =
`<Checkbox
 checked={true}
 text="Text"
 onChange={() => {}}
 //disabled
/>`;

const InputTextCode =
`<InputText
 placeholder="Enter a text"
 onChange={() => {}}
 //setStatus="success"
 //setStatus="danger"
 //setStatus="loading"
/>`;

const InputPasswordCode =
`<InputText
 type="password"
 placeholder="Enter password"
 onChange={() => {}}
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
/>`;

const InputSearchBarCode =
`<InputSearchBar
 placeholder="Search here"
 onSubmit={() => {}}
/>`;

const InputSearchBoxCode =
`<InputSearchBox
 placeholder="Enter to Search"
 onChange={() => {}}
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
 checked={true}
 name="2"
 text="some text"
 //disabled
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