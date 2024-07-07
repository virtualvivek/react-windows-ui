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

const SwitchLabelFixedWidthUsageCode =
`<Switch
  labelOn="On"
  labelOff="Off"
  labelFixedWidth={40}
  defaultChecked={true}
/>`;

const SwitchLabelPositionStartUsageCode =
`<Switch
  labelOn="On"
  labelOff="Off"
  labelFixedWidth={40}
  labelPosition={"start"}
  defaultChecked={true}
/>`;


export {
  SwitchImportCode,
  SwitchUsageCode,
  SwitchNoLabelUsageCode,
  SwitchLabelFixedWidthUsageCode,
  SwitchLabelPositionStartUsageCode
}