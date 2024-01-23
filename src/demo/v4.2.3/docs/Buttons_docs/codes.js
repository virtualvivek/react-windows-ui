const ButtonImportCode = 
`import { Button } from "react-windows-ui";`;

const ButtonDefaultCode =
`<Button
  isLoading={false}
  onClick={() => {}}
  value="Default Button"
  tooltip="some tooltip text"
  icon={<i className="icons10-plus"></i>}
/>`;

const ButtonTypesCode =
`<Button
  value="Default Button"
/>
<Button
  type="primary"
  value="Primary Button"
/>
<Button
  type="subtle"
  value="Subtle Button"
/>
<Button
  type="primary-outline"
  value="Primary Outline Button"
/>`;

const ButtonIconPrimary =
`<Button
  onClick={() => {}}
  justifyContent={"start"}
  value="Button Aligned Start"
  icon={<i className="icons10-plus color-primary"></i>}
/>`;

const ButtonPrimary =
`<Button
  type="primary"
  value="Primary Button"
  onClick={() => {}}
/>`;

const ButtonPrimaryOutline =
`<Button
  onClick={() => {}}
  type="primary-outline"
  value="Primary Outline"
  //icon={<i className="icons10-plus"></i>}
/>`;

const ButtonIconCode =
`<Button
  icon={<i className="icons10-home"></i>}
/>

<Button
  type="primary"
  icon={<i className="icons10-share"></i>}
/>

<Button
  type="subtle"
  icon={<i className="icons10-plus"></i>}
/>

<Button
  type="primary-outline"
  icon={<i className="icons10-fingerprint"></i>}
/>`;

const ButtonSuccessCode =
`<Button
  type="success"
  onClick={() => {}}
  value="Success Button"
  //type="success-outline"
  //icon={<i className="icons10-checkmark"></i>}
/>`;

const ButtonDangerCode =
`<Button
  type="danger"
  onClick={() => {}}
  value="Danger Button"
  //type="danger-outline"
  //icon={<i className="icons10-cross"></i>}
/>`;


export {
  ButtonImportCode,
  ButtonTypesCode,
  ButtonDefaultCode,
  ButtonIconPrimary,
  ButtonPrimary,
  ButtonPrimaryOutline,
  ButtonIconCode,
  ButtonSuccessCode,
  ButtonDangerCode
}