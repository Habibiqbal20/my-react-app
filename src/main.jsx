import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from '../src/component/Nav.jsx'
import LandingPage from '../src/component/LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <LandingPage />
  </StrictMode>,
)
