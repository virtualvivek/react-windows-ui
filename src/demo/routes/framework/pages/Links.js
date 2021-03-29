import React from 'react'
import { Link } from 'react-router-dom'
import { NavPageContainer,LinkCompound,LinkCompoundFluent,RegisterFluentEffect } from '../../../../lib'

const Links = () => {
  return (
    <NavPageContainer hasPadding>

    <h1>Links</h1>

    {/* Register the fluent effect before using LinkCompoundFluent */}
    <RegisterFluentEffect/>


      <Link to="#" className="app-link">Default App Link</Link> 
      
      <br/><br/>

      <Link to="#" className="app-link"><b>Default Bold App Link</b></Link>
      
      <br/><br/>

      <LinkCompound
        to="#"
        title="System Settings and preferences"
        subtitle="Customize system controls and more"
        icon={<i className="icons10-timeline"></i>}
      />

      <br/><br/>

      <LinkCompound
        to="#"
        title="Network usage by individual apps"
        subtitle="Display data consumes by installed apps"
        icon={<i className="icons10-area-chart color-primary"></i>}
      />
        
      <h3>Link Style border</h3>

      <LinkCompound
        to="#"
        linkStyle="border"
        title="Notification settings and DND"
        subtitle="Control which app push notification"
        icon={<i className="icons10-notification"></i>}
      />


      <h3>Fluent Effect</h3>

      <LinkCompoundFluent
        to="#"
        title="Personalization settings and Colors"
        subtitle="Change theme and colors"
        icon={<i className="icons10-color-palette"></i>}
      />
     
      <h3>Link icon bg primary</h3>

      <LinkCompound
        to="#"
        title="Camera settings and preferences"
        subtitle="Modify saturation, filters for the physical camera device"
        icon={<i className="icons10-camera bg-primary"></i>}
      />
        
      <h3>Link icon grey</h3>

      <LinkCompound
        to="#"
        title="Add more devices to system"
        subtitle="creating digital utilities for system"
        icon={<i className="icons10-plus bg-grey"></i>}
      />
        
      <br/><br/>


    </NavPageContainer>
  )
}

export default Links