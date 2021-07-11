import React from 'react'
import { Link } from 'react-router-dom'
import { NavPageContainer,InputText,Button,Switch } from '../../lib/src'

const LoginLayout = () => {
  return (
    <NavPageContainer hasPadding>

        <div className="app-align-center">
        <h1>App</h1>
        <br/>
        <div>
            <InputText
                placeholder="Enter Username"
                width={270}/>
            <br/><br/>
            <InputText
                type="password"
                placeholder="Enter Password"
                width={270}/>
            <br/>
            <div
                className="app-flex app-align-center"
                style={{width:'285px',justifyContent:'space-between'}}>
                <p>Remember Me</p>
                <Switch checked textOn=""/>
            </div>
            <Button
                value="Sign In"
                width={285}
                type="primary"/>
        </div>

        <br/>

        <div className="app-flex app-align-center">
            <h4 className="light m-tb-10 font-size-16px">Don't have an account? &nbsp;</h4>
            <Link to="#" className="app-link">Sign Up</Link>
        </div>

        </div>

    </NavPageContainer>
  )
}

export default LoginLayout