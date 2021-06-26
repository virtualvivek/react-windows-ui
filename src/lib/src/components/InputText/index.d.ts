import React from 'react'

export interface InputTextProps {
    width?: number | string;
    placeholder?: string;
    label?: string;
    type?: string;
    setStatus?: string;
    tooltip?: string;
    onChange?: Function;
}
declare const InputText: Component<InputTextProps>

export default InputText
