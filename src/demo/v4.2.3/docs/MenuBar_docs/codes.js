const MenuBarImportCode =
`import { MenuBar } from "react-windows-ui";`;

const MenuBarUsageCode =
`<MenuBar
  label="Select a fruit"
  data={[
    {label: "peach", onClick: () => funcName},
    {label: "orange", onClick: () => funcName},
    {label: "banana", onClick: () => funcName},
    {label: "apple", onClick: () => funcName, icon: <i className="icons10-camera"></i>}
  ]}
/>`;

const MenuBarOnClickUsageCode =
`<MenuBar
  showSearchBar={true}
  label="Select a fruit"
  data={[
    {label: "peach", onClick: () => funcName},
    {label: "orange", onClick: () => funcName},
    {label: "banana", onClick: () => funcName},
    {label: "apple", onClick: () => funcName, icon: <i className="icons10-camera"></i>}
  ]}
/>`;


export {
  MenuBarImportCode,
  MenuBarUsageCode,
  MenuBarOnClickUsageCode
}