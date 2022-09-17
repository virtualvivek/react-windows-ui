import React from 'react'
import ReactDOM from 'react-dom/client'
// import './lib/config/app-config.css'
// import './lib/dist/react-windows-ui.min.css'
import './lib/icons/fonts/fonts.min.css'
import './demo/common/doc-styles.css'
import App from './demo/App'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);