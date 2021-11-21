const MenuBarImportCode =
`import { MenuBar } from 'react-windows-ui'`;

const MenuBarUsageCode =
`<MenuBar
  label="Select a fruit"
  data={[
    {label: 'apple', link: '#', icon: <i className="icons10-camera"></i>},
    {label: 'orange', link: '#'},
    {label: 'banana', link: '#'},
    {label: 'peach', link: '#'},
  ]}
/>`;

const MenuBarOnClickUsageCode =
`<MenuBar
  label="Select a fruit"
  showSearchBar={true}
  data={[
    {label: 'apple', onClick: this.funcName, icon:<i className="icons10-camera"></i>},
    {label: 'orange', onClick: this.funcName},
    {label: 'banana', onClick: this.funcName},
    {label: 'peach', onClick: this.funcName},
  ]}
/>`;


export {
  MenuBarImportCode,
  MenuBarUsageCode,
  MenuBarOnClickUsageCode
}