import React, {useState} from 'react'
import Landing from "../sections/Landing"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"
import Navbar from "../Navbar"


const Home = () => {

    return (
        <div className='bg-light' style={{minHeight: "82vh"}}>
            <Navbar />
             <Landing/>
             <About/>
             <Skills/>
             <Projects/>
             <Contact/>
        </div>
    )
}

export default Home