import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import projects from "../../utils/projectsData";
import BrowserParty from "../BrowserParty";
import DoschRealty from "../DoschRealty";
import SkyfallTravel from "../SkyfallTravel";


const ProjectView = () => {
    const [project, setProject] = useState({});
    const [projectName, setProjectName] = useState("")

    useEffect(() => {
        const projectName = window.location.pathname.split("/")[2];
        setProjectName(projectName)
        if (projectName === "browser-party") {
            setProject(projects.browserParty);
        } else if (projectName === "skyfall-travel") {
            setProject(projects.skyfallTravel);
        } else {
            setProject(projects.doschRealty);
        }
    }, []);

    const importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const images = importAll(require.context(`../../images/details/${projectName}`, false, '/\.jpg/'));

    return (
        <div className="" style={{ minHeight: "86vh" }} id="project-view">
            <Navbar />
            <div
                className="bg-custom-lg"
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
                <div
                    className="justify-content-center mx-auto mt-4"
                    style={{ width: "92%", maxWidth: "1200px" }}
                >
                    <h3 className="text-center">{project.title}</h3>
                    <div className="project-body row">
                        <div className="col-xl-9">
                            <div
                                id="carouselExampleIndicators"
                                class="carousel slide"
                                data-ride="carousel"
                            >
                                <ol class="carousel-indicators">
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="0"
                                        class="active"
                                    ></li>
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="1"
                                    ></li>
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="2"
                                    ></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img
                                            class="d-block w-100"
                                            src={project.pic}
                                            alt="First slide"
                                        />
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>...</h5>
                                            <p>...</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            class="d-block w-100"
                                            src={project.pic}
                                            alt="Second slide"
                                        />
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>...</h5>
                                            <p>...</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            class="d-block w-100"
                                            src={project.pic}
                                            alt="Third slide"
                                        />
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>...</h5>
                                            <p>...</p>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    class="carousel-control-prev"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span
                                        class="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a
                                    class="carousel-control-next"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span
                                        class="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            {project.title === "Browser Party" && <BrowserParty/>}
                            {project.title === "Skyfall Travel" && <SkyfallTravel/>}
                            {project.title === "Dosch Realty" && <DoschRealty/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectView;
