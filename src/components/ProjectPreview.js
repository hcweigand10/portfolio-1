import React from "react";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { width } from "@mui/system";

const ProjectPreview = ({ thumbnail, hook, title, liveUrl }) => {
    const toSnakeCase = (title) => {
        return title.toLowerCase().split(" ").join("-");
    };

    return (
        <div className="row py-4">
            <div className="col-lg-6 text-center">
                <img
                    className="project-preview-pic"
                    src={thumbnail}
                    alt={`preview pic for ${title}`}
                />
            </div>
            <div
                className="col-lg-6 align-items-center d-flex"
                style={{ position: "relative" }}
            >
                <div className="container">
                    <h3 style={{ fontWeight: "750" }}>{title}</h3>
                    <p
                        className="text-muted col-10 col-lg-12 mx-auto"
                        style={{}}
                    >
                        {hook}
                    </p>
                    <div>
                        <a className="btn custom-btn" href={liveUrl}>
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
