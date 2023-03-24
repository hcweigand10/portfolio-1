import React from 'react'
import profPic from "../../assets/images/zoomedProfpic.png"

const About = () => {

    return (
        <div className='py-4 container' id='about'>
             <h2 className='text-center section-heading mb-1'>About</h2>
             <div className='d-flex justify-content-center'><hr className='section-underline underline-primary'/></div>
             <section className="row my-1 mx-auto p-3">
                <div className="col-md-5 text-center p-3">
                    <img
                        className=""
                        src={profPic}
                        alt="Peter Headshot"
                        id="profile-pic"
                    />
                </div>
                <div className="col-md-7 p-3">
                    <div className="pt-3 h-100">
                        <h5 className="text-muted">Henry Weigand</h5>
                        <p className="plain-text">
                            I was born and raised in Seattle and recently graduated from the University of Washington. I started coding in 2021 and am excited to pursue web development and software engineering as both a career and a hobby. </p>
                        <p>
                            I currently work the Unversity of Washington's Full Stack Coding Boot Camp and freelance as a website builder. If you need a new online presence, please reach out!
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