import React from 'react'
import { Router, Route } from 'react-router'

import Dashboard from './dashboard'

import { Layout } from './app'

function AppRouter({ history }) {
  console.log("In Router, History ", history)
  return <Router history={ history }>
    <Route component={ Layout }>
      <Route path='/' component={ Dashboard } />
    </Route>
  </Router>
}

export default AppRouter
