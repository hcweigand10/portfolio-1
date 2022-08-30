import React from "react";

const ProjectPreview = ({ project }) => {

    const toSnakeCase = (title) => {
        return title.toLowerCase().split(" ").join("-")
    }

    return (
        <div className="row py-4">
            <div className="col-md-6 text-center">
                <img src={project.pic} style={{ width: "80%" }} />
            </div>
            <div className="col-md-6">
                <h3 style={{ fontWeight: "750" }}>{project.title}</h3>
                <p className="text-muted" style={{}}>
                    {project.description}
                </p>
                <div>
                    <a className="btn live-btn" href={project.liveUrl}>
                        Live Site
                    </a>
                    <a className="btn learn-btn" href={`projects/${toSnakeCase(project.title)}`}>
                        Learn More
                    </a>
                    <a className="btn github-btn" href={project.github}>
                        Github Repo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
