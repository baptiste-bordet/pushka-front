import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
