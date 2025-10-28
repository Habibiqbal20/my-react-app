import React from 'react'
import Nav from '../component/Nav'
import About from '../component/About'
import Contact from '../component/Contact'
import Education from '../component/Education'
import Footer from '../component/Footer'
import LandingPage from '../component/LandingPage'
import MouseHover from '../component/MouseHover'
import Powered from '../component/Powered'
import Project from '../component/Project'
import Tribute from '../component/Tribute'

export default function Home() {
    return (
        <>
            <MouseHover />
            <Nav />
            <LandingPage />
            <About />
            <Education />
            <Project />
            <Powered />
            <Tribute />
            <Contact />
            <Footer />
        </>
    )
}
