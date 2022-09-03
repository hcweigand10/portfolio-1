import React from 'react'
import ProjectPreview from '../ProjectPreview';
import projects from '../../utils/projectsData';

const Projects = () => {

    const previews = [projects.doschRealty, projects.browserParty, projects.skyfallTravel].map((project, index) => <ProjectPreview project={project} key={index}/>)

    return (
        <div className='py-4' id='projects'>
             <h2 className='text-center section-heading mb-1'>Projects</h2>
             <div className='d-flex justify-content-center'><hr className='section-underline underline-primary'/></div>
             <div className='mx-auto' style={{width: "90vw", maxWidth: "1000px"}}>    
                {previews}
             </div>
        </div>
    )
}

export default Projects