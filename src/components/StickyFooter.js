import React from "react";
import {
    faEnvelope,
    faPhone,
    faHome,
    faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StickyFooter = () => {
    return (
        <div className="py-3 text-center" id="custom-footer">
            <div className="my-2">
                <ul className="py-2 d-inline" style={{ fontSize: "18px" }}>
                    <li
                        className="d-inline me-3 btn footer-social"
                        style={{ backgroundColor: "#0077b5" }}
                    >
                        <a
                            className="text-light"
                            href="https://www.linkedin.com/in/henryweigand/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li
                        className="d-inline me-3 btn footer-social"
                        style={{ backgroundColor: "black" }}
                    >
                        <a
                            className="text-light"
                            href="https://github.com/hcweigand10"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li
                        className="d-inline me-3 btn footer-social"
                        style={{ backgroundColor: "red" }}
                    >
                        <a
                            className="text-light"
                            href="mailto:henryweigand10@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="d-flex justify-content-center">
                <hr style={{ width: "80%" }} />
            </div>
            <p className="mb-0">
                <FontAwesomeIcon className="me-1" icon={faCopyright} />
                <a
                    href="https;//henryweigand.com"
                    style={{ color: "lightgray" }}
                >
                    henryweigand.com
                </a>
            </p>
        </div>
    );
};

export default StickyFooter;
