import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.module.scss'
import App from './components/App'

const container = document.querySelector('.ElC')
const root = createRoot(container)
root.render(
  <Router>
    <App />
  </Router>
)
