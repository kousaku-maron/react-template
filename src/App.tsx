import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={['*']} component={() => <p>hello world</p>} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
