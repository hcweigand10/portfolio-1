import React from "react";
import SocialButtons from "./SocialButtons";
import {
    faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StickyFooter = () => {
    return (
        <div className="pt-3 text-center" id="custom-footer">
            <div className="py-2">
                <SocialButtons />
            </div>
            <div className="d-flex justify-content-center">
                <hr className="my-2" style={{ width: "80%" }} />
            </div>
            <p className="my-0">
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
