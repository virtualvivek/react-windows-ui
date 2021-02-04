import React from 'react'
import { Link } from 'react-router-dom'
import {LinkCoumpound,ProgressBar,CommandBar,Dialog} from '../../../../lib'

const Reports = () => {
  return (
    <div className="app-section-container"> 

    <CommandBar />
    
      <h1>Links</h1>


      <Link to="#" className="app-link">Default App Link</Link> 
      
      <br/><br/>


      <ProgressBar
        setProgress={90}/>

        <ProgressBar
        setProgress={50}
        showIcon={true}>
        <i className="icons10-hdd" ></i>
        </ProgressBar>

      <Link to="#" className="app-link"><b>Default Bold App Link</b></Link>
      <br/><br/>

      <LinkCoumpound to="#">
        <i className="icons10-timeline"></i>
      </LinkCoumpound>
      <br/><br/>

      <LinkCoumpound  to="#"
        iconStyle="accent">
        <i className="icons10-notification"></i>
      </LinkCoumpound>
      <br/><br/>

      <LinkCoumpound to="#">
        <i className="icons10-camera bg-accent"></i>
      </LinkCoumpound>
      <br/><br/>

      <LinkCoumpound to="#">
        <i className="icons10-plus bg-grey"></i>
      </LinkCoumpound>
      <br/><br/>


      

   
      <Dialog 
        isVisible={true}>
        <h1>Hellow world</h1>
        <h1>Hellow world</h1>
        <h1>Hellow world</h1>
        <h1>Hellow world</h1>
        <h1>Hellow world</h1>
        <h1>Hellow world</h1>
        <h1>Hellow world</h1>
        <h1>Hellow world</h1>
        <h1>Hellow world</h1>
        <h1>Hellow world</h1>
      </Dialog>

      {/* <Alert 
        isVisible={true}
        title="title">
          <button class="app-alert-button">OK</button>
      </Alert> */}

      


    </div>
  )
}

export default Reports
