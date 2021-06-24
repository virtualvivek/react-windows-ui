import React from 'react'

export interface RadioButtonProps {
    name ?: string;
    checked ?: boolean;
    disabled ?: boolean;
    text ?: string;
    tooltip ?: string;
    onChange ?: () => void;
}
declare const RadioButton: React.SFC<RadioButtonProps>

export default RadioButton