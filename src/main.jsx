import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResumeDataProvider from './Context/ResumeDataProvider.jsx'
import './index.css'
import LoginProvider from './Context/LoginProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <ResumeDataProvider>
        <App></App>
      </ResumeDataProvider>
    </LoginProvider>
  </React.StrictMode>,
)
