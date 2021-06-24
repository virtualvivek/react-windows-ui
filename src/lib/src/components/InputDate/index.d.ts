import React from 'react'

export interface InputDateProps {
    placeholder ?: string;
    onChange ?: Function;
    tooltip ?: string;
}
declare const InputDate: React.SFC<InputDateProps>

export default InputDate