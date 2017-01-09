import { browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import createRouter from './Router'
import './index.css'

ReactDOM.render(
  <div>
    { createRouter({ history: browserHistory }) }
  </div>,
  document.getElementById('root')
)
