const ButtonDefaultCode =
`<Button
 value="Default Button"
 //disabled
 //width={155}
 isLoading={false}
 icon={<i className="icons10-plus"></i>}
 onClick={() => {}}
 />`;

const ButtonIconPrimary =
`<Button
 width={155}
 textAlign={'start'}
 icon={<i className="icons10-plus color-primary"></i>}
 value="Button Aligned Start"
 onClick={() => {}}
 />`;

const ButtonPrimary =
`<Button
 type="primary"
 value="Primary Button"
 //disabled
 //icon={<i className="icons10-plus"></i>}
 isLoading={false}
 onClick={() => {}}
 />`;

const ButtonPrimaryOutline =
`<Button
 type="primary-outline"
 value="Primary Outline"
 //disabled
 //icon={<i className="icons10-plus"></i>}
 isLoading={false}
 onClick={() => {}}
 />`;

 const ButtonIconCode =
`<ButtonIcon
 icon={<i className="icons10-add"></i>}
 onClick={() => {}}
/>`; 

export {
    ButtonDefaultCode,
    ButtonIconPrimary,
    ButtonPrimary,
    ButtonPrimaryOutline,
    ButtonIconCode
}