import React from 'react'
import ProjectPreview from '../ProjectPreview';

import BrowserPic from "../../assets/images/Browser.png";
import DoschRealty from "../../assets/images/brad-dosch.png";
import SkyfallPic from "../../assets/images/Skyfall1.png";

const Projects = () => {
    const projects = [
        {
            title: "Dosch Realty",
            description:
                "React Website built for Bradley Dosch, a Seattle-based realtor. The site featues easy navigation, a built-in content manager for Brad to easily add and update blog posts, and connected sql database for storing and accessing blogs and testimonials written by former clients.",
            awards: "",
            liveUrl: "https://profound-lollipop-4eb9d0.netlify.app/",
            github: "https://github.com/hcweigand10/fake-youtube",
            pic: DoschRealty,
        },
        {
            title: "Browser Party",
            description:
                "Browser Party is fully browser-based multiplayer party game that allows users to compete and chat with each other in real time using socket.io and React. This project was a blast to make!",
            awards: "Best Functionality",
            liveUrl: "https://browser-party.herokuapp.com/",
            github: "https://github.com/kingnolds/Browser-Party",
            pic: BrowserPic,
        },
        {
            title: "Skyfall Travel",
            description:
                "Skyfall Travel was my first full-stack application. It utilizes a MYSQL database to enable users to plan, and save future trips to their account, including things like stops, dates, and budget breakdowns.",
            awards: "Best Overall and Best Functionality",
            liveUrl: "https://skyfall-travel.herokuapp.com/",
            github: "https://github.com/hcweigand10/SkyFall-Travel",
            pic: SkyfallPic,
        }
    ]

    const previews = projects.map((project, index) => <ProjectPreview project={project} key={index}/>)

    return (
        <div className='py-4'>
             <h2 className='text-center section-heading mb-1'>Projects</h2>
             <div className='d-flex justify-content-center'><hr className='section-underline underline-primary'/></div>
             <div className='container'>    
                {previews}
             </div>
        </div>
    )
}

export default Projects