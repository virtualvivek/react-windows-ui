import React from 'react'
import { Link } from 'react-router-dom'
import { NavPageContainer,Button } from '../../lib/src'

const AboutLayout = () => {
  return (
    <NavPageContainer hasPadding>

    <h1 className="m-b-10">About</h1>
    <i className="icons10-groove color-primary" style={{fontSize:60}}></i>

    <h2 className="m-tb-10">Specification</h2>
    <div className="app-flex">
        <div>
            <h4 className="m-tb-10">Name</h4>
            <h4 className="m-tb-10">Version</h4>
            <h4 className="m-tb-10">System type</h4>
            <h4 className="m-tb-10">App Size</h4>
        </div>
        <div className="app-space-40"></div>
        <div>
            <h4 className="light m-tb-10">react-windows-ui</h4>
            <h4 className="light m-tb-10">1.0.4</h4>
            <h4 className="light m-tb-10">Hybrid Web based Interface</h4>
            <h4 className="light m-tb-10">107.4 MB</h4>
        </div>  
    </div>
    <br/>

      <Button
        value="Check for updates"
      />

      <br/><br/>

      <Link to="#" className="app-link font-size-18px">Learn more about privacy policy</Link>

    </NavPageContainer> 
  )
}

export default AboutLayout