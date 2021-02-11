import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Framework from './routes/framework'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={["/","/home"]} component={Framework}  exact />
        </Switch>
      </Router>
    </>
  )
}

export default App;
