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
        icon={<i className="icons10-timeline"></i>}
      />

      <br/><br/>

      <LinkCoumpound 
        to="#"
        icon={<i className="icons10-timeline accent"></i>}
      />
        
      <br/><br/>

      <LinkCoumpound  
        to="#"
        iconStyle="accent"
        icon={<i className="icons10-notification"></i>} 
      />
     
      <br/><br/>

      <LinkCoumpound 
        to="#"
        icon={<i className="icons10-camera bg-accent"></i>}
      />
        
      <br/><br/>

      <LinkCoumpound 
        to="#"
        icon={<i className="icons10-plus bg-grey"></i>}
      />
        
      <br/><br/>


    </NavPageContainer> 
  )
}

export default Links
