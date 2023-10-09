import App from './App/App'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'







ReactDOM.render(
  <React.StrictMode>
    <Router>
       <App /> 
    </Router>
  </React.StrictMode>,
  document.getElementById('app')
)

//Entry point for react app