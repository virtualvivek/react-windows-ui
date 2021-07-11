import React from 'react'

export interface InputSearchBarProps {
    placeholder ?: string;
    onSubmit ?: Function;
    tooltip ?: string;
}
declare const InputSearchBar: React.FC<InputSearchBarProps>

export default InputSearchBar