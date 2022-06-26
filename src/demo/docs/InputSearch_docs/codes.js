const SearchBarImportCode =
`import { InputSearchBar } from 'react-windows-ui'`;

const SearchBoxImportCode =
`import { InputSearchBox } from 'react-windows-ui'`;

const SearchSuggestionImportCode =
`import { InputSearchSuggestion } from 'react-windows-ui'`;

const SearchBarUsageCode =
`<InputSearchBar
  name="Some Name"
  value="some value"
  onSubmit={() => {}}
  //tooltip="tooltip title"
  placeholder="Search here"
/>`;

const SearchBoxUsageCode =
`<InputSearchBox
  name="Some Name"
  value="some value"
  onChange={() => {}}
  //tooltip="tooltip title"
  placeholder="Enter to Search"
/>`;

const SearchSuggestionUsageCode =
`<InputSearchSuggestion
  placeholder="Type 'a' .."
  data={[
    {label: 'apple', link: '#', icon: <i className="icons10-baby"></i>},
    {label: 'orange', link: '#', onClick: this.function},
    {label: 'banana', link: '#'},
    {label: 'peach', link: '#'},
  ]}
  //tooltip="tooltip title"
/>`;


export {
    SearchBarImportCode,
    SearchBoxImportCode,
    SearchSuggestionImportCode,
    SearchBarUsageCode,
    SearchBoxUsageCode,
    SearchSuggestionUsageCode
}