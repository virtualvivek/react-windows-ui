import React from 'react'
import { NavPageContainer, LinkCompound } from '../../../lib'

const GettingStarted = () => {

    return (
    <NavPageContainer
        hasPadding
        animateTransition>
        <h1>Templates</h1>

         
            <LinkCompound
                display="inline-block"
                to="/AppJsDefault"
                title="App.js"
                subtitle="Default App.js Configuration"
                icon={<i className="icons10-bag"></i>}
                focused={true}
                margin="5px 5px 0 0"
            />

            <LinkCompound
                display="inline-block"
                to="/AppJsSearchable"
                title="App.js"
                subtitle="With Searchable NavItems"
                icon={<i className="icons10-list-search"></i>}
                focused={true}
                margin="5px 5px 0 0"
            />
            <br/>
            <div className="app-hr"></div>
           
            <LinkCompound
                to="/PageJsDefault"
                title="Page.js"
                subtitle="Default Page.js configuration"
                icon={<i className="icons10-window"></i>}
                focused={true}
                margin="5px 5px 0 0"
            />



        <h1>Layouts</h1>

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
                to="/LoginLayout"
                title="Login"
                subtitle="User Login in interface"
                icon={<i className="icons10-lock"></i>}
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
                to="/ListLayout"
                title="Lists"
                subtitle="List illustrations"
                icon={<i className="icons10-list"></i>}
                focused={true}
                margin="5px 5px 0 0"
            />


    <br/><br/><br/><br/><br/><br/>
    </NavPageContainer>
  )
}

export default GettingStarted