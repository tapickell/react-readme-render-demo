import React, { Component } from 'react'

import './Header.css'
import logo from '../../public/pizza_25.png';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="Header-title">SPP Admin Portal</h2>
      </div>
    )
  }
}

export default Header
