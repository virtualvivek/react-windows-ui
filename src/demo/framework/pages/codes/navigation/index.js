const NavBarCode =
`import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar, NavBarLink, SystemThemeFollower } from 'react-windows-ui'
import Page1 from './pages/page1'
import Page2 from './pages/page2'

const App = () => {
    return (
        <Router basename="react-windows-ui">

            <SystemThemeFollower/>

            <NavBar 
              title="React Windows UI"
              titleShort={<i className="icons10-windows"></i>}
           // titleShort="R" render text or icons
           // mobileHasIcons={true}
              shadowOnScroll={true}>

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

            <Switch>
                <Route path="/" component={Page1}  exact />
                <Route path="/page2" component={Page2} />
            </Switch>
        </Router>
      )
    }
    
export default App
`;

const Page1Code =
`import React from 'react'
import { NavPageContainer, NavPageContainerInner, NavPageContainerRight } from 'react-windows-ui'

const Page1 = () => {
    return (
        <NavPageContainer hasPadding={false}>

            <NavPageContainerInner>
                <h1>Page1</h1>
            </NavPageContainerInner>

            <NavPageContainerRight>
                <h4 className="m-0">Right Section Container</h4>
            </NavPageContainerRight>

        </NavPageContainer>
        );
    }

export default Page1
`;

export {
    NavBarCode,
    Page1Code
}