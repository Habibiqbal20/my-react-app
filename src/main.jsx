import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from '../src/component/Nav.jsx'
import LandingPage from '../src/component/LandingPage.jsx'
import About from '../src/component/About.jsx'
import MouseHover from '../src/component/MouseHover.jsx'
import Education from '../src/component/Education.jsx'
import Project from '../src/component/Project.jsx'
import Contact from '../src/component/Contact.jsx'
import Footer from '../src/component/Footer.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MouseHover />
        <Nav />
        <LandingPage />
        <About />
        <Education />
        <Project />
        <Contact />
        <Footer />
    </StrictMode>,
)
