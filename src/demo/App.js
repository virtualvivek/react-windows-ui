import React from 'react'
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom'
import Framework from './routes/framework'
import { SystemThemeFollower } from '../lib'

function App() {
  return (
    <>
    <SystemThemeFollower/>
      <Router>
        <Switch>
          <Route path="/framework/home" component={Framework}  exact />
          <Redirect to='/framework/home'/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
