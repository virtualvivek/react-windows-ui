import React from 'react'

export interface InputSearchBoxProps {
    placeholder ?: string;
    onChange ?: Function;
    tooltip ?: string;
}
declare const InputSearchBox: React.FC<InputSearchBoxProps>

export default InputSearchBox