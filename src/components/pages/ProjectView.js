import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import projects from "../../utils/projectsData";
import CarouselPlus from "../CarouselPlus";
import ProjectInfo from "../ProjectInfo";

const ProjectView = () => {
    const { project } = useParams();
    const [projectObj, setProjectObj] = useState({
        title: "",
        hook: "",
        description: "",
        liveUrl: "",
        github: "",
        awards: [],
        pics: [],
        thumbnail: null,
        tech: [],
    });

    useEffect(() => {
        switch (project) {
            case "browser-party":
                setProjectObj(projects.browserParty);
                break;
            case "bradley-dosch-realty":
                setProjectObj(projects.doschRealty);
                break;
            case "peter-strasser-music":
                setProjectObj(projects.peterMusic);
                break;
            case "skyfall-travel":
                setProjectObj(projects.skyfallTravel);
                break;
            default:
                setProjectObj(projects.browserParty);
                break;
        }
    }, [project]);

    console.log(projectObj);

    return (
        <div className="" style={{ minHeight: "86vh" }} id="project-view">
            <Navbar />
            <div
                className=""
                id="project-view-main"
                style={{ minHeight: "calc(86vh - 57px)" }}
            >
                <div
                    className=""
                    style={{
                        position: "relative",
                        top: "10px",
                        paddingLeft: "10px",
                    }}
                >
                    <a
                        className="go-back-link"
                        href="/"
                        style={{ color: "black", textDecoration: "underline" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-left"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                            />
                        </svg>
                        Go Back
                    </a>
                </div>
                <div className="py-3 mx-auto project-view-inner">
                    <h2 className="text-center section-heading">
                        {projectObj.title}
                    </h2>
                    <div className="d-flex justify-content-center">
                        <hr className="section-underline underline-primary" />
                    </div>
                    {projectObj.title && (
                        <div className="py-3">
                            <div className="row">
                                <div className="col-xxl-8 pb-4">
                                    <CarouselPlus pics={projectObj.pics} />
                                </div>
                                <div className="col-xxl-4 pe-0 ps-3 pb-4">
                                    <ProjectInfo
                                        description={projectObj.description}
                                        awards={projectObj.awards}
                                        tech={projectObj.tech}
                                        liveUrl={projectObj.liveUrl}
                                        github={projectObj.github}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectView;
