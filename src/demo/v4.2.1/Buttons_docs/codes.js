const ButtonImportCode = 
`import { Button } from "react-windows-ui";`;

const ButtonIconImportCode =
`import { ButtonIcon } from "react-windows-ui";`;

const ButtonDefaultCode =
`<Button
  isLoading={false}
  onClick={() => {}}
  value="Default Button"
  tooltip="some tooltip text"
  icon={<i className="icons10-plus"></i>}
/>`;

const ButtonAsIconCode =
`<Button
  value=""
  icon={<i className="icons10-controller"></i>}
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
`<ButtonIcon
  onClick={() => {}}
  tooltip="Some tooltip text"
  icon={<i className="icons10-plus"></i>}
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
  //icon={<i className="icons10-cancel-2"></i>}
/>`;


export {
  ButtonImportCode,
  ButtonAsIconCode,
  ButtonIconImportCode,
  ButtonDefaultCode,
  ButtonIconPrimary,
  ButtonPrimary,
  ButtonPrimaryOutline,
  ButtonIconCode,
  ButtonSuccessCode,
  ButtonDangerCode
}