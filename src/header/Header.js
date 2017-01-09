import React, { Component } from 'react'

import './Header.css'
import logo from '../../public/logo.svg'

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="Header-title">Screencasts Demo</h2>
      </div>
    )
  }
}

export default Header
