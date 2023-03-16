import React, { useLayoutEffect } from "react";
import {
    faUpRightFromSquare,
    faAward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectInfo = ({ description, awards, tech, liveUrl, feGithub, beGithub, socketGithub }) => {
    useLayoutEffect(() => {
        document.getElementById("description-long").innerHTML = description;
    }, [description]);

    const awardsEl =
        awards.length > 0
            ? awards.map((award, index) => {
                  return (
                      <li className="" key={index}>
                          <FontAwesomeIcon icon={faAward} className="me-2" />{" "}
                          {award} (UW Coding Boot Camp)
                      </li>
                  );
              })
            : null;

    const techUsed = tech.map((e, index) => {
        return (
                <span className="tech-used px-2 mt-1 d-flex w-auto mx-2">{e}</span>
        );
    });

    return (
        <div className="">
            <h4 className="mb-1">Description</h4>
            <p id="description-long" style={{ lineHeight: "1.2" }}></p>
            {awards.length > 0 && (
                <div>
                    <h4 className="mb-1">Awards</h4>
                    <ul style={{ listStyleType: "none", paddingLeft: "10px" }}>
                        {awardsEl}
                    </ul>
                </div>
            )}
            <h4 className="mb-1">Tech Used</h4>
            <div className="row d-flex ms-1 mb-3" style={{ flexWrap: "wrap", lineHeight: "2" }}>
                {techUsed}
            </div>
            
            <h4 className="mt-1">Check it Out</h4>
            <div className="">
                <a className="btn custom-btn m-2" href={liveUrl} target="_blank" rel="noreferrer">
                    Live Site <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
                <a className="btn custom-btn m-2" href={feGithub} target="_blank" rel="noreferrer">
                    Frontend Repo <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
                {beGithub? <a className="btn custom-btn m-2" href={beGithub} target="_blank" rel="noreferrer">
                    Backend Repo <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>:null}
                {socketGithub? <a className="btn custom-btn m-2" href={socketGithub} target="_blank" rel="noreferrer">
                    Socket.io Repo <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>:null}
            </div>
        </div>
    );
};

export default ProjectInfo;
