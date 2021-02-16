import React from 'react'
import { Link } from 'react-router-dom'
import {NavPageContainer,LinkCoumpound } from '../../../../lib'

const Links = () => {
  return (
    <NavPageContainer hasPadding>

    <h1>Links</h1>


      <Link to="#" className="app-link">Default App Link</Link> 
      
      <br/><br/>


      <Link to="#" className="app-link"><b>Default Bold App Link</b></Link>
      <br/><br/>

      <LinkCoumpound 
        to="#"
        title="System Settings and preferences"
        subtitle="Customize system controls and more"
        icon={<i className="icons10-timeline"></i>}
      />

      <br/><br/>

      <LinkCoumpound 
        to="#"
        title="Network usage by individual apps"
        subtitle="Display data consumes by installed apps"
        icon={<i className="icons10-area-chart accent"></i>}
      />
        
      <br/><br/>

      <LinkCoumpound  
        to="#"
        linkStyle="border"
        title="Notification settings and DND"
        subtitle="Control which app push notification"
        icon={<i className="icons10-notification"></i>} 
      />
     
      <br/><br/>

      <LinkCoumpound 
        to="#"
        title="Camera settings and preferences"
        subtitle="Modify saturation, filters for the physical camera device"
        icon={<i className="icons10-camera bg-accent"></i>}
      />
        
      <br/><br/>

      <LinkCoumpound 
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
