import React from 'react'

export interface CheckboxProps {
    text ?: string;
    disabled ?: boolean;
    checked ?: boolean;
    tooltip ?: string;
    onChange ?: Function;
}
declare const Checkbox: Component<CheckboxProps>

export default Checkbox
