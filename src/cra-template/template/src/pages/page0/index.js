import React from "react";
import { NavPageContainer } from "react-windows-ui";

const Page0 = () => {
  return (
    <NavPageContainer
      animateTransition={true}>

      <div
        style={{backgroundColor: '#282C34', height: '100%', textAlign: 'center'}}
        className="app-align-center">
          <br/><br/>
        <i className="icons10-windows app-align-center"
          style={{fontSize: 120,color: '#67DBF9'}}></i>
        <div style={{color: '#fff'}}>
          <h1 className="m-0">Welcome to react-windows-ui</h1>
          <h4>-v4.1.0</h4>
          <br/><br/><br/><br/>
          <h2>Edit App.js and save to see changes.</h2>
          <br/>
          <h2>
          <a href="https://virtualvivek.github.io/react-windows-ui/" rel="noreferrer" target="_blank" style={{color:'#67DBF9',background:'transparent'}}>See Documentation </a>
          |
          <a href="https://github.com/virtualvivek/react-windows-ui" rel="noreferrer" target="_blank" style={{color:'#67DBF9',background:'transparent'}}> Repository</a>
          </h2>
        </div>
      </div>

    </NavPageContainer>
  );
}

export default Page0;