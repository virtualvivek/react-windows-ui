import React from 'react'

export interface SwitchProps {
    checked?: boolean;
    disabled?: boolean;
    textOn?: string;
    textOff?: string;
    tooltip?: string;
    onChange?: () => void;
}
declare const Switch: Component<SwitchProps>

export default Switch
