import React from 'react'
import {
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SocialButtons = () => {

    return (
        <div className="my-2">
                <ul className="py-2 ps-0 d-inline" style={{ fontSize: "18px" }}>
                    <li
                        className="d-inline mx-2 btn footer-social"
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
                        className="d-inline mx-2 btn footer-social"
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
                        className="d-inline mx-2 btn footer-social"
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
    )
}

export default SocialButtons