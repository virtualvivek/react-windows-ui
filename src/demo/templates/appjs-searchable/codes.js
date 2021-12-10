const AppJsSearchableCode =
`import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar, NavBarLink, NavSearchBox } from 'react-windows-ui'
import Page1 from './pages/page1'
import Page2 from './pages/page2'

const NavBarItem = [
  {
    "to": "/",
    "exact": true,
    "text": "Page1",
    "icon": "icons10-home",
    "showBadge": false
  },
  {
    "to": "/page2",
    "exact": false,
    "text": "Page2",
    "icon": "icons10-explore",
    "showBadge": 7
  }
  //... more
]

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: NavBarItem,
      filteredData: NavBarItem
    }
  }

  handleInputSearch = event => {
    const query = event.target.value
    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.text.toLowerCase().includes(query.toLowerCase())
      })
      return {
        query,
        filteredData
      }
    })
  }


  render() {
  return (
        <Router basename="react-windows-ui">

          <NavBar 
            title="React Windows UI"
          //mobileHasIcons={true}
            shadowOnScroll={true}>

            <NavSearchBox
              placeholder="Find a Nav Item"
              onChange={this.handleInputSearch}/>

            {this.state.filteredData.map((item, key) => {
              return <NavBarLink
                key={key}
                to={item.to}
                exact={item.exact}
                text={item.text}
                icon={<i className={item.icon}></i>}
                showBadge={item.showBadge}
                />
              })
            }

            // You can also add more simple NavBarLink
            {/* 
            <NavBarLink
              to="/"
              exact={true}
              text="Page1"
              icon={<i className="icons10-home"></i>}
              showBadge={7}
            />
            */}

          </NavBar>

          <Switch>
            <Route path="/" component={Page1}  exact />
            <Route path="/page2" component={Page2} />
          </Switch>

        </Router>
      )
    }
  }
    
export default App
`;

export {
    AppJsSearchableCode as AppJSDefaultCode
}