const ButtonImportCode = 
`import { Button } from 'react-windows-ui'`;

const ButtonIconImportCode =
`import { ButtonIcon } from 'react-windows-ui'`;

const ButtonDefaultCode =
`<Button
 value="Default Button"
 isLoading={false}
 icon={<i className="icons10-plus"></i>}
 onClick={() => {}}
 tooltip="some tooltip text"
/>`;

const ButtonIconPrimary =
`<Button
 justifyContent={'start'}
 icon={<i className="icons10-plus color-primary"></i>}
 value="Button Aligned Start"
 onClick={() => {}}
/>`;

const ButtonPrimary =
`<Button
 type="primary"
 value="Primary Button"
 onClick={() => {}}
/>`;

const ButtonPrimaryOutline =
`<Button
 type="primary-outline"
 value="Primary Outline"
 onClick={() => {}}
 //icon={<i className="icons10-plus"></i>}
/>`;

const ButtonIconCode =
`<ButtonIcon
 icon={<i className="icons10-add"></i>}
 onClick={() => {}}
 tooltip="Some tooltip text"
/>`;

const ButtonSuccessCode =
`<Button
 value="Success Button"
 type="success"
 onClick={() => {}}
 //type="success-outline"
 //icon={<i className="icons10-checkmark"></i>}
/>`;

const ButtonDangerCode =
`<Button
 value="Danger Button"
 type="danger"
 onClick={() => {}}
 //type="danger-outline"
 //icon={<i className="icons10-cancel-2"></i>}
/>`;

const ButtonFluentCode =
`import { RegisterFluentEffect, ButtonFluent } from 'react-windows-ui'

return (
  <RegisterFluentEffect/>
  <ButtonFluent
    value="Fluent Button"
    onClick={() => {}}
  />
)`;

export {
  ButtonImportCode,
  ButtonIconImportCode,
  ButtonDefaultCode,
  ButtonIconPrimary,
  ButtonPrimary,
  ButtonPrimaryOutline,
  ButtonIconCode,
  ButtonSuccessCode,
  ButtonDangerCode,
  ButtonFluentCode
}