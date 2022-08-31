import React from 'react'
import profPic from "../../assets/images/zoomedProfpic.png"

const About = () => {

    return (
        <div className='py-4'>
             <h2 className='text-center section-heading mb-1'>About</h2>
             <div className='d-flex justify-content-center'><hr className='section-underline underline-primary'/></div>
             <section className="row my-1 mx-auto p-3">
                <div className="col-md-6 text-center p-3">
                    <img
                        className=""
                        src={profPic}
                        alt="Peter Headshot"
                        id="profile-pic"
                    />
                </div>
                <div className="col-md-6 p-3">
                    <div className="pt-3 h-100">
                        <h5 className="text-muted">Henry Weigand</h5>
                        <p className="plain-text">
                            I am a born and raised Seattlite and recent University of Washington graduate. I started coding in 2021 and am excited to pursue web development and software engineering as both a career and a hobby. </p>
                        <p>
                            During the 2021-22 winter, I enrolled in the University of Washington's Full-Stack coding bootcamp, fully diving into this new chapter. Thanks to the diligence of my professor and TAs (shoutout Joe Rehfuss!) I came away with not only a foundation of web development skills, but also experience with professional workflows and project management. Out of all we learned, I am most excited to learn more about everything related to React, MVC structures, and of course my first love: vanilla JavaScript.
                        </p>
                        <p>
                            Away from the computer, I enjoy watching and playing sports, playing video games way too competitively, and (attempting to) win pub trivia competitions. But most importantly, I want to travel, and here's to hoping that a tech career can open that door for me. :)
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About