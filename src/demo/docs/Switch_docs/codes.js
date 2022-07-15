const SwitchImportCode =
`import { Switch } from "react-windows-ui";`;

const SwitchUsageCode =
`<Switch
  labelOn="On"
  labelOff="Off"
  onChange={() => {}}
  defaultChecked={true}
/>`;

const SwitchNoLabelUsageCode =
`<Switch
  label={false}
  onChange={() => {}}
  defaultChecked={true}
/>`;


export {
  SwitchImportCode,
  SwitchUsageCode,
  SwitchNoLabelUsageCode
}