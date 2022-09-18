const AppJSDefaultCode =
`import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar, NavBarLink } from 'react-windows-ui'
import Page1 from './pages/page1'
import Page2 from './pages/page2'

const App = () => {
    return (
      <Router basename={"/"}>

        <NavBar 
          title="App Name"
          shadowOnScroll={true}
          titleBarMobile={<> your custom view for mobile devices </>}>

          <h1>Layouts</h1>
          <div className="app-hr"></div>

          <NavBarLink
            to="/"
            exact={true}
            text="Page1"
            icon={<i className="icons10-home"></i>}
            showBadge={7}
          />

          <NavBarLink
            to="/page2"
            text="Page2"
            icon={<i className="icons10-list"></i>}
          />

        </NavBar>

        <Routes>
          <Route path="/" element={<Page1/>} exact/>
          <Route path="/page2" element={<Page2/>} />
        </Routes>

      </Router>
    )
  }
    
export default App
`;

export {
    AppJSDefaultCode
}