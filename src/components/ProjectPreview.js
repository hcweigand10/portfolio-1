import React from "react";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectPreview = ({ thumbnail, hook, title, liveUrl, border }) => {
    const toSnakeCase = (title) => {
        return title.toLowerCase().split(" ").join("-");
    };

    return (
        <div className={border ? "row py-4 border-bottom project-preview" : "row py-4 project-preview"}>
            <div className="col-lg-6 text-center">
                <img
                    className="project-preview-pic w-100 p-3"
                    src={thumbnail}
                    alt={`preview pic for ${title}`}
                />
            </div>
            <div
                className="col-lg-6 align-items-center d-flex p-3"
                style={{ position: "relative" }}
            >
                <div className="container">
                    <h3 className="" style={{ fontWeight: "750" }}>{title}</h3>
                    <p
                        className="text-muted col-10 col-lg-12"
                        style={{}}
                    >
                        {hook}
                    </p>
                    <div>
                        <a className="btn custom-btn" href={liveUrl} target="_blank" rel="noreferrer">
                            Live Site{" "}
                            <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </a>
                        <a
                            className="btn custom-btn mx-3"
                            href={`/projects/${toSnakeCase(title)}`}
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
