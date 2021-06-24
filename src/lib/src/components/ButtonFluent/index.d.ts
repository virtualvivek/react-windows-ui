import React from 'react'

export interface ButtonFluentProps {
    value ?: string;
    display ?: string;
    onSubmit ?: Function;
    onClick ?: Function;
}
declare const ButtonFluent: React.SFC<ButtonFluentProps>

export default ButtonFluent