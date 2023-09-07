import App from './App/App'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <Router>
       <App /> 
    </Router>
  </React.StrictMode>
)

//Entry point for react app