const MenuBarImportCode =
`import { MenuBar } from "react-windows-ui";`;

const MenuBarUsageCode =
`<MenuBar
  label="Select a fruit"
  data={[
    {label: 'peach', link: '#'},
    {label: 'orange', link: '#'},
    {label: 'banana', link: '#'},
    {label: 'apple', link: '#', icon: <i className="icons10-camera"></i>}
  ]}
/>`;

const MenuBarOnClickUsageCode =
`<MenuBar
  showSearchBar={true}
  label="Select a fruit"
  data={[
    {label: 'peach', onClick: this.funcName},
    {label: 'orange', onClick: this.funcName},
    {label: 'banana', onClick: this.funcName},
    {label: 'apple', onClick: this.funcName, icon:<i className="icons10-camera"></i>}
  ]}
/>`;


export {
  MenuBarImportCode,
  MenuBarUsageCode,
  MenuBarOnClickUsageCode
}