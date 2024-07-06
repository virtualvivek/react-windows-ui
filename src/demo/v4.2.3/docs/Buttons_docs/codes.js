const ButtonImportCode = 
`import { Button } from "react-windows-ui";`;

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

const ButtonVarientCode =
`<Button
  value="Default Button"
/>

<Button
  isLoading
  value="Loading Button"
/>

<Button
  type="primary"
  value="Primary Button"
  icon={<i className="icons10-fantasy"></i>}
/>

<Button
  type="primary-outline"
  value="Primary Button"
  icon={<i className="icons10-fantasy"></i>}
/>

<Button
  width={155}
  value="Align Start"
  justifyContent={'start'}
  icon={<i className="icons10-plus ui-color-primary"></i>}
/>

<Button
  type="success"
  value="Success Button"
/>

<Button
  type="success-outline"
  value="Success Button"
  icon={<i className="icons10-checkmark"></i>}
/>

<Button
  type="danger"
  value="Danger Button"
/>

<Button
  type="danger-outline"
  value="Danger Button"
  icon={<i className="icons10-cross"></i>}
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


export {
  ButtonImportCode,
  ButtonTypesCode,
  ButtonVarientCode,
  ButtonIconCode,
}