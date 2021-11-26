const SwitchImportCode =
`import { Switch } from 'react-windows-ui'`;

const SwitchUsageCode =
`<Switch
  defaultChecked={true}
  labelOn="On"
  labelOff="Off"
  onChange={() => {}}
/>`;

const SwitchNoLabelUsageCode =
`<Switch
  label={false}
  defaultChecked={true}
  onChange={() => {}}
/>`;


export {
    SwitchImportCode,
    SwitchUsageCode,
    SwitchNoLabelUsageCode
}