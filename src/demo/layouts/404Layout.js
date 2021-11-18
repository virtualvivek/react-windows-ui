import React from 'react'
import { Link } from 'react-router-dom'
import { NavPageContainer } from '../../lib/src'

const _404Layout = () => {
  return (
    <NavPageContainer>
      <div className="app-container-screen primary">
        <Link to="../" className="_404-button-back">
          <i className="icons10-arrow-left color-white"></i>
        </Link>
      
        <div className="_404-container">
            <div className="_404-sad-face">
            :(
            </div>    
            <br/>
            <p className="_404-upper">Your web page ran into a problem and need your attention. We have already collected some error info.</p>
            <p className="_404-lower">if you'd like to know more, you can search online for this error : 404_PAGE_NOT_FOUND</p>  
            <div className="app-flex app-align-center">
            <i className="icons10-qr-code"></i>
            <div>
              <p>For more information about this issue</p>
              <p>Stop Code: 404_PAGE_NOT_FOUND</p>
            </div>
            </div>  
        </div>
      </div>
    </NavPageContainer>
  )
}


export default _404Layout