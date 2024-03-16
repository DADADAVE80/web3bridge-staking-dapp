import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme, ThemePanel } from '@radix-ui/themes';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme appearance="dark">
      <App />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>,
)
