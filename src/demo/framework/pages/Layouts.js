import React from 'react'
import { NavPageContainer, LinkCompound } from '../../../lib'

const Layouts = () => {

    return (
    <NavPageContainer hasPadding>
        <h1>Layouts</h1>

        <div>
         
            <LinkCompound
                display="inline-block"
                to="/AboutLayout"
                title="About"
                subtitle="App installed information"
                icon={<i className="icons10-info"></i>}
                focused={true}
                margin="5px 5px 0 0"
            />

            <LinkCompound
                display="inline-block"
                to="/BlogLayout"
                title="Blog Layout"
                subtitle="Article layout demonstration"
                icon={<i className="icons10-create-new"></i>}
                focused={true}
                margin="5px 5px 0 0"
            />
    
            <LinkCompound
                to="/CommandBarLayout"
                title="Command Bar"
                subtitle="Command UI Pallete"
                icon={<i className="icons10-window"></i>}
                focused={true}
                margin="5px 5px 0 0"
            />

            <LinkCompound
                to="/ContactsLayout"
                title="Contact Book"
                subtitle="ListView of users"
                icon={<i className="icons10-contact-book"></i>}
                focused={true}
                margin="5px 5px 0 0"
            />
    
            <LinkCompound  
                to="/LoginLayout"
                title="Login"
                subtitle="User Login in interface"
                icon={<i className="icons10-lock"></i>}
                focused={true}
                margin="5px 5px 0 0"
            />
    
            <LinkCompound  
                to="/ListLayout"
                title="Lists"
                subtitle="List illustrations"
                icon={<i className="icons10-list"></i>}
                focused={true}
                margin="5px 5px 0 0"
            />
       
        </div>

    <br/><br/><br/><br/><br/><br/>
    </NavPageContainer>
  )
}

export default Layouts
