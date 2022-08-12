import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppTheme, SplashScreen, NavBar, NavBarLink, NavSearchSuggestion, NavThemeSwitcher } from "react-windows-ui";
import Page0 from "./pages/page0";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Img from "./assets/mountain.jpg";

const App = () => {

  const [splash, setSplash] = useState(true);

  useEffect(() => {
   setSplash(false);
  }, [])

  return (
    <Router basename={'/'}>

      <SplashScreen
        //duration={1000} /* Add additional delay before page loads */
        isVisible={splash}
        title={"App Name"}
      />

      <AppTheme // To make app reactive with theme
        scheme="system" // Available props - 'light', 'dark' or 'system'
      />

      <NavBar 
        title="App Name"
        shadowOnScroll={true}
        titleBarMobile={
          <div style={{display: "flex", justifyContent: "space-between", width: "calc(100% - 60px)"}}>
            <span className="app-navbar-name">React-windows-ui</span>
            <span className="app-navbar-name">Subtitle</span>
          </div>}
      >

        {/* Optional component - emphasizes navbar Search funtionality */}
        <NavSearchSuggestion
          placeholder="Search Your Pages.."
          tooltip="Search Tooltip"
          data={[
            {label: 'home', link: '/', icon: <i className="icons10-home"></i>},
            {label: 'Page 1', link: '/page1'},
            {label: 'Page 2', link: '/page2'}
          ]}
        />
        <NavThemeSwitcher/>

        <h1>Pages</h1>
        <div className="app-hr"></div>

        <NavBarLink
          to="/"
          exact={true}
          text="Home"
          imgSrc={Img}
        />

        <NavBarLink
          to="/page1"
          text="Page1"
          icon={<i className="icons10-grid-2"></i>}
        />

        <NavBarLink
          to="/page2"
          text="Page2"
          icon={<i className="icons10-columns"></i>}
        />

      </NavBar>

      <Routes>
        <Route path="/" element={<Page0/>}  exact />
        <Route path="/page1" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
      </Routes>

    </Router>
  )
}
    
export default App;