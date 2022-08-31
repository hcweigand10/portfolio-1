import React from "react";
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ProjectPreview = ({ project }) => {

    const toSnakeCase = (title) => {
        return title.toLowerCase().split(" ").join("-")
    }

    return (
        <div className="row py-4">
            <div className="col-lg-6 text-center">
                <img className="project-preview-pic" src={project.pic} alt={`preview pic for ${project.title}`}/>
            </div>
            <div className="col-lg-6">
                <h3 className="text-center" style={{ fontWeight: "750" }}>{project.title}</h3>
                <p className="text-muted col-10 col-lg-12 mx-auto" style={{}}>
                    {project.description}
                </p>
                <div className="d-flex justify-content-evenly">
                    <a className="btn custom-btn" href={project.liveUrl}>
                        Live Site <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                    <a className="btn custom-btn" href={`projects/${toSnakeCase(project.title)}`}>
                        Learn More
                    </a>
                    {/* <a className="btn github-btn" href={project.github}>
                        Github Repo
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
