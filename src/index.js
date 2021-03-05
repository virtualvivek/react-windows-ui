import React from 'react'
import ReactDOM from 'react-dom'
import './lib/config/app-config.css'
import './lib/dist/react-windows-ui.min.css'
import './lib/icons/fonts/fonts.min.css'
import App from './demo/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);