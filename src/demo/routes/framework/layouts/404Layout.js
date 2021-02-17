import React from 'react'
import { Link } from 'react-router-dom'

class _404Layout extends React.Component {

    componentDidMount() {
        document.getElementById("app-nav-wrap").style.display="none";
      }
      
    componentWillUnmount() {
        document.getElementById("app-nav-wrap").style.display="";
      }


  render() {  
  return (
    <div className="app-container-screen accent">
        <Link to="../" className="app-back fixed light"/>
      
        <div className="_404-container">
            <div className="_404-sad-face">
            :(
            </div>    
            <br/>
            <p className="_404-upper">Your web page ran into a problem and need your attention. We have already collected some error info.</p>
            <p className="_404-lower">if you'd like to know more, you can search online for this error : 404_PAGE_NOT_FOUND</p>  
            <div className="app-flex-center">
            <i className="icons10-qr-code"></i>
            <div>
              <p>For more information about this issue</p>
              <p>Stop Code: 404_PAGE_NOT_FOUND</p>
            </div>
            </div>  
        </div>
    </div>
  );
}
}


export default _404Layout
