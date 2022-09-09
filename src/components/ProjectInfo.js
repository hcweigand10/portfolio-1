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
            <div className="col-4 py-0" key={index}>
                {e}
            </div>
        );
    });

    return (
        <div className="">
            <h4 className="mb-1">Description</h4>
            <p id="description-long" style={{ lineHeight: "1.15" }}></p>
            {awards.length > 0 && (
                <div>
                    <h4 className="mb-1">Awards</h4>
                    <ul style={{ listStyleType: "none", paddingLeft: "10px" }}>
                        {awardsEl}
                    </ul>
                </div>
            )}
            <h4 className="mb-1">Tech Used</h4>
            <div className="row d-flex" style={{ flexWrap: "wrap" }}>
                {techUsed}
            </div>
            <div className="d-flex justify-content-evenly pt-4">
                <a className="btn custom-btn" href={liveUrl}>
                    Live Site <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
                <a className="btn custom-btn" href={github}>
                    Github Repo
                </a>
            </div>
        </div>
    );
};

export default ProjectInfo;
