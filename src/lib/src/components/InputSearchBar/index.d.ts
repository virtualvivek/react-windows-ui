import React from 'react'

export interface InputSearchBarProps {
    placeholder ?: string;
    onSubmit ?: Function;
    tooltip ?: string;
}
declare const InputSearchBar: React.SFC<InputSearchBarProps>

export default InputSearchBar