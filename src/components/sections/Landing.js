import React from 'react'
import SocialButtons from '../SocialButtons'

const Landing = () => {


    return (   
            <main className="text-center py-5" id='landing'>
                <div className='py-3'>
                    <h1 className='title' style={{fontWeight: "700"}}>Hey there, I'm <span className='name-span' style={{fontWeight: "800"}}>Henry Weigand</span></h1>
                    <h4 className='subtitle' style={{fontWeight: "600"}}>Full-Stack Developer</h4>
                </div>
                
                <div className='facts py-4'>
                    <a className='landing-btn' href='#projects'>PROJECTS</a>
                </div>
                <SocialButtons/>
            </main>

    )
}

export default Landing
