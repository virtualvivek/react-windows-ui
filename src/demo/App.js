import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Framework from './routes/framework'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" component={Framework}  exact />
          <Redirect to='/home'/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
