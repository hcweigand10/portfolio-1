import React, { useLayoutEffect } from "react";
import {
    faUpRightFromSquare,
    faAward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectInfo = ({ description, awards, tech, liveUrl, github }) => {
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
                <a className="btn custom-btn mx-2" href={liveUrl} target="_blank" rel="noreferrer">
                    Live Site <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
                <a className="btn custom-btn mx-2" href={github} target="_blank" rel="noreferrer">
                    Github Repo <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
            </div>
        </div>
    );
};

export default ProjectInfo;
