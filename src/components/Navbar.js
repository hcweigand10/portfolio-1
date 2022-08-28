
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { MDBCollapse } from 'mdb-react-ui-kit';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [activePage, setActivePage] = useState(window.location.pathname);
    const [collapse, setCollapse] = useState(true);
    const [absolute, setAbsolute] = useState(false)

    useEffect(() => {
      console.log(window.location.pathname)
      setActivePage(window.location.pathname)
    }, [])
    
    
    const handlePageChange = (page) => {
      setActivePage(page);
    };
    
    const handleCollapse = () => {
      setCollapse(!collapse);
      setTimeout(() => {
        setAbsolute(!absolute)
      }, absolute ? 400:0);
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
                    onClick={() => handlePageChange("/")}
                    style={{fontSize: "x-large"}}
                >
                    Henry Weigand
                </Link>
                {/* <!-- Collapsible wrapper --> */}
                <MDBCollapse
                    className="navbar-collapse align-items-center ps-2"
                    id="navbarSupportedContent"
                    show={!collapse}
                    style={absolute ? {position: "absolute", top: "46px", zIndex: 3, backgroundColor: "white", width: "100%"}: null}
                >
                    {/* <!-- Left links --> */}

                    {/* <!-- Left links --> */}
                    {/* <!-- Rght links --> */}
                    <ul
                        className="navbar-nav mb-md-0 py-1 justify-content-end d-flex"
                        style={{ fontSize: "18px", width: "100%"}}
                    >
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === "/"
                                        ? "nav-link custom-link"
                                        : "nav-link custom-link"
                                }
                                to="#landing"
                                onClick={() => handlePageChange("/")}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === "/about"
                                        ? "nav-link custom-link"
                                        : "nav-link custom-link"
                                }
                                to="#about"
                                onClick={() => handlePageChange("/about")}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === "/projects"
                                        ? "nav-link custom-link"
                                        : "nav-link custom-link"
                                }
                                to="#projects"
                                onClick={() => handlePageChange("/projects")}
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                    {/* <!-- Rght links --> */}
                </MDBCollapse>
                {/* <!-- Collapsible wrapper --> */}
            </div>
        </nav>
    );
};

export default Navbar;
