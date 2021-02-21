import React from 'react'
import { Link } from "react-router-dom"
import { NavPageContainer,InputText,Button,Switch } from '../../../../lib'

const LoginLayout = () => {
  return (
    <NavPageContainer hasPadding>
        <h1>SignIn</h1>
        <br/>
        <div>
            <InputText
                placeholder="Enter Username"
            />
            <br/><br/>
            <InputText
                type="password"
                placeholder="Enter Password"
            />
            <br/>
            <div className="app-flex-center">
                <p>Remember Me</p>
                <div className="app-space-45"></div>
                <Switch checked/>
            </div>
            <Button
                value="SignIn"
                width={284}
            />
        </div>

        <br/>

        <div className="app-flex-center">
            <h4 className="light m-tb-10 font-size-16px">Don't have an account &nbsp;</h4>
            <Link to="#" className="app-link">SignUp</Link>
        </div>

    </NavPageContainer>
  )
}

export default LoginLayout