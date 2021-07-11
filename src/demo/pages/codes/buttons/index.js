const ButtonDefaultCode =
`<Button
 value="Default Button"
 isLoading={false}
 icon={<i className="icons10-plus"></i>}
 onClick={() => {}}
 //disabled
 //width={155}
 //tooltip="tooltip title"
/>`;

const ButtonIconPrimary =
`<Button
 width={155}
 textAlign={'start'}
 icon={<i className="icons10-plus color-primary"></i>}
 value="Button Aligned Start"
 onClick={() => {}}
 //tooltip="tooltip title"
/>`;

const ButtonPrimary =
`<Button
 type="primary"
 value="Primary Button"
 isLoading={false}
 onClick={() => {}}
 //disabled
 //icon={<i className="icons10-plus"></i>}
 //tooltip="tooltip title"
/>`;

const ButtonPrimaryOutline =
`<Button
 type="primary-outline"
 value="Primary Outline"
 isLoading={false}
 onClick={() => {}}
 //disabled
 //icon={<i className="icons10-plus"></i>}
/>`;

const ButtonIconCode =
`<ButtonIcon
 icon={<i className="icons10-add"></i>}
 onClick={() => {}}
 //tooltip="tooltip title"
/>`;

const ButtonSuccessCode =
`<Button
 value="Success Button"
 onClick={() => {}}
 type="success"
 //type="success-outline"
 //icon={<i className="icons10-checkmark"></i>}
/>`;

const ButtonDangerCode =
`<Button
 value="Danger Button"
 onClick={() => {}}
 type="danger"
 //type="danger-outline"
 //icon={<i className="icons10-cancel-2"></i>}
/>`;

const ButtonFluentCode =
`return (
    <RegisterFluentEffect/>
    <ButtonFluent
        value="Fluent Button"
        onClick={() => {}}
    />
    )`;

export {
    ButtonDefaultCode,
    ButtonIconPrimary,
    ButtonPrimary,
    ButtonPrimaryOutline,
    ButtonIconCode,
    ButtonSuccessCode,
    ButtonDangerCode,
    ButtonFluentCode
}