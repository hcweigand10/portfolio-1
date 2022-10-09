import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBCollapse } from "mdb-react-ui-kit";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({isHome}) => {
    const [collapse, setCollapse] = useState(true);
    const [absolute, setAbsolute] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse);
        setTimeout(
            () => {
                setAbsolute(!absolute);
            },
            absolute ? 400 : 0
        );
    };

    return (
        // <!-- Navbar -->
        <nav className="navbar navbar-expand-md p-0">
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid custom-nav ps-0">
                <button
                    className="navbar-toggler ms-2"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleCollapse}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {/* <!-- Navbar brand --> */}
                <Link
                    className="navbar-brand mt-md-0 p-2"
                    to="/"
                    style={{ fontSize: "x-large" }}
                >
                    Henry Weigand
                </Link>
                {/* <!-- Collapsible wrapper --> */}
                <MDBCollapse
                    className="navbar-collapse align-items-center ps-2"
                    id="navbarSupportedContent"
                    show={!collapse}
                    style={
                        absolute
                            ? {
                                  position: "absolute",
                                  top: "46px",
                                  zIndex: 3,
                                  backgroundColor: "white",
                                  width: "100%",
                              }
                            : null
                    }
                >
                    {/* <!-- Rght links --> */}
                    {isHome ? (<ul
                        className="navbar-nav mb-md-0 py-1 justify-content-end d-flex"
                        style={{ fontSize: "18px", width: "100%" }}
                    >
                        <li className="nav-item mx-2">
                            <ScrollLink
                                className="nav-link custom-link"
                                to="about"
                                spy={true}
                                smooth={false}
                                duration={500}
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className="nav-item mx-2">
                        <ScrollLink
                                className="nav-link custom-link"
                                to="skills"
                                spy={true}
                                smooth={false}
                                duration={500}
                            >
                                Skills
                            </ScrollLink>
                        </li>
                        <li className="nav-item mx-2">
                        <ScrollLink
                                className="nav-link custom-link"
                                to="projects"
                                spy={true}
                                smooth={false}
                                duration={500}
                            >
                                Projects
                            </ScrollLink>
                        </li>
                        <li className="nav-item mx-2">
                        <ScrollLink
                                className="nav-link custom-link"
                                to="contact"
                                spy={true}
                                smooth={false}
                                duration={500}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>) : (
                        <ul
                        className="navbar-nav mb-md-0 py-1 justify-content-end d-flex"
                        style={{ fontSize: "18px", width: "100%" }}
                    >
                            <li className="nav-item mx-2">
                                <a className="nav-link custom-link" href="/">Home</a>
                            </li>
                        </ul>
                    )}
                    
                    {/* <!-- Rght links --> */}
                </MDBCollapse>
            </div>
        </nav>
    );
};

export default Navbar;
