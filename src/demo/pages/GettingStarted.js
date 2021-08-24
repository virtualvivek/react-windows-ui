import React from 'react'
import { NavPageContainer, LinkCompound } from '../../lib/src'

const GettingStarted = () => {

  return (
    <NavPageContainer
      hasPadding
      animateTransition>

      <h1>Boilerplate</h1>
         
        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/AppJsDefault"
          title="Template"
          subtitle="Starter template repository"
          icon={<i className="icons10-file-explorer"></i>}
          focused={true}
          margin="5px 5px 0 0" />

      <h1>Templates</h1>
         
        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/AppJsDefault"
          title="App.js"
          subtitle="Default App.js Configuration"
          icon={<i className="icons10-bag"></i>}
          focused={true} />

        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/AppJsSearchable"
          title="App.js"
          subtitle="With Searchable NavItems"
          icon={<i className="icons10-list-search"></i>}
          focused={true}
          margin="5px 5px 0 0" />
        <br/>
        <div className="app-hr"></div>
        
        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/PageJsDefault"
          title="Page.js"
          subtitle="Default Page.js configuration"
          icon={<i className="icons10-window"></i>}
          focused={true} />

        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/PageJsSplit"
          title="Page.js"
          subtitle="With Split Page Inner and Right"
          icon={<i className="icons10-columns"></i>}
          focused={true} />


      <h1>Layouts</h1>

        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/AboutLayout"
          title="About"
          subtitle="App installed information"
          icon={<i className="icons10-info"></i>}
          focused={true}
          margin="5px 5px 0 0" />

        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/LoginLayout"
          title="Login"
          subtitle="User Login in interface"
          icon={<i className="icons10-lock"></i>}
          focused={true} />

        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/BlogLayout"
          title="Blog Layout"
          subtitle="Article layout demonstration"
          icon={<i className="icons10-create-new"></i>}
          focused={true} />

        <LinkCompound
          to="/CommandBarLayout"
          title="Command Bar"
          subtitle="Command UI Pallete"
          icon={<i className="icons10-window"></i>}
          focused={true}
          style={{margin:'5px 5px 0 0',width:240}} />

        <LinkCompound
          to="/ContactsLayout"
          title="Contact Book"
          subtitle="ListView of users"
          icon={<i className="icons10-contact-book"></i>}
          focused={true}
          style={{margin:'5px 5px 0 0',width:240}} />

        
        <LinkCompound  
          to="/ListLayout"
          title="Lists"
          subtitle="List illustrations"
          icon={<i className="icons10-list"></i>}
          focused={true}
          style={{margin:'5px 5px 0 0',width:240}} />


    <br/><br/><br/><br/><br/><br/>
    </NavPageContainer>
  )
}

export default GettingStarted