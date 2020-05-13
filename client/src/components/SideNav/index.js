import React from "react";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

function SideNav(props) {
  return (
    <div className="sideNavDiv" /*class="vertText"*/>
      <button
        id="mySideNav"
        onClick={props.activeContact}
        className="btn btn-link"
      >
        {/* <FontAwesomeIcon icon={faPaperPlane} style={{ color: "white" }} /> */}
        Click to Contact Me
      </button>
    </div>
  );
}

export default SideNav;
