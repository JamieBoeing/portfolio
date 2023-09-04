import App from './App/App'
import AppRouter from './router/AppRouter'
import ReactDOM from 'react-dom'
import React from 'react'

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
      <App />
      <AppRouter />
  </React.StrictMode>
)

//Entry point for react app