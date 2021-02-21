import React from 'react'
import { NavPageContainer,Card,LinkCoumpound } from '../../../../lib'

const Layouts = () => {

    return (
    <NavPageContainer hasPadding>
        <h1>Layouts</h1>

        <div>
        <Card
            display="inline-block"
            focused
            margin="5px 5px 5px 0">
            <LinkCoumpound  
                to="/AboutLayout"
                title="About"
                subtitle="App installed information"
                icon={<i className="icons10-info"></i>} 
            />
        </Card>
        &nbsp;&nbsp;
        <Card
            display="inline-block"
            focused
            margin="5px 5px 5px 0">
            <LinkCoumpound  
                to="/LoginLayout"
                title="Login"
                subtitle="User Login in interface"
                icon={<i className="icons10-lock"></i>} 
            />
        </Card>
        <Card
            display="inline-block"
            focused
            margin="5px 5px 5px 0">
            <LinkCoumpound  
                to="/ContactsLayout"
                title="Contact Book"
                subtitle="ListView of users"
                icon={<i className="icons10-contact-book"></i>} 
            />
        </Card>
        <Card
            display="inline-block"
            focused
            margin="5px 5px 5px 0">
            <LinkCoumpound  
                to="/ListLayout"
                title="Lists"
                subtitle="List illustrations"
                icon={<i className="icons10-list"></i>} 
            />
        </Card>
        </div>

    <br/><br/><br/><br/><br/><br/>
    </NavPageContainer>
  )
}

export default Layouts
