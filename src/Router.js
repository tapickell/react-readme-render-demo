import React from 'react'
import { Router, Route } from 'react-router'

import Dashboard from './dashboard'
import { Layout } from './app'
import { OrderConfirm, OrderReview, OrderApproval } from './order'

function AppRouter({ history }) {
  console.log("In Router, History ", history)
  return <Router history={ history }>
    <Route component={ Layout }>
      <Route path='/' component={ Dashboard } />
      <Route path='/order/:orderId/confirm' component={ OrderConfirm } />
      <Route path='/order/:orderId/review' component={ OrderReview } />
      <Route path='/order/:orderId/approval' component={ OrderApproval } />
    </Route>
  </Router>
}

export default AppRouter
