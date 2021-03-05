import {useEffect} from 'react'
import FluentButton from './FluentButton'

const RegisterFluentEffect = () => {

    useEffect(()=>{
        <FluentButton />

        document.querySelectorAll('[data-fluent-component]').forEach(element => {
            new FluentButton(element, {
              outerReveal: true
            });
          });
    })

    return ''

}

export default RegisterFluentEffect