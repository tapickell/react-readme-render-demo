import React from 'react'
import { Grid } from 'react-bootstrap'

import { Header } from '../header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <Grid id="main" fluid>
        { children }
      </Grid>
    </div>
  )
}

Layout.propTypes = {
  children: React.PropTypes.node
}

export default Layout
