import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

const NotFound = () => {
    return (
        <div className="" style={{ minHeight: "86vh" }}>
            <Navbar />
            <h2 className="text-center p-5">This page doesn't exist!</h2>
            <Link className="text-center p-2 d-block" to="/"><h4>Return Home</h4></Link>
        </div>
    );
};

export default NotFound;
