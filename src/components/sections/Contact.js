import React from "react";
import {Element} from "react-scroll"

const Contact = () => {
    return (
        <Element className="py-4 bg-custom-lg" id="contact" name="contact">
            <h2 className="section-heading text-center mb-1">Contact</h2>
            <div className="d-flex justify-content-center">
                <hr className="section-underline underline-secondary" />
            </div>
            <h6 className="text-center">
                Any Questions? Shoot me an email below!
            </h6>
            <form
                className="mx-auto"
                style={{ width: "80%", maxWidth: "650px" }}
            >
                <div className="form-group">
                    <label htmlFor="form-name">Name</label>
                    <input
                        className="shadow form-control mx-auto"
                        id="form-name"
                        style={{
                            width: "100%",
                            border: "none",
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="form-message">Message</label>
                    <textarea
                        className="shadow form-control mx-auto"
                        id="form-message"
                        rows={4}
                        style={{
                            width: "100%",
                            border: "none",
                        }}
                    ></textarea>
                </div>
                <div className="d-flex">
                    <a
                        className="btn custom-btn my-3 mx-auto"
                        href="mailto:henryweigand10@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Send Email
                    </a>
                </div>
            </form>
        </Element>
    );
};

export default Contact;
