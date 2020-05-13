import React from "react";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

function SideNav(props) {
  function handleContactTextEnter() {
    props.changeContactText("Click to Contact Me");
  }

  function handleContactTextLeave() {
    props.changeContactText("");
  }

  return (
    <div className="sideNavDiv" /*class="vertText"*/>
      <button
        id="mySideNav"
        onClick={props.activeContact}
        onMouseEnter={handleContactTextEnter}
        onMouseLeave={handleContactTextLeave}
        className="btn btn-link"
      >
        {props.onHoverTextDisplay === "" ? (
          <FontAwesomeIcon
            icon={faPaperPlane}
            style={{ color: "white", fontSize: "20px" }}
          />
        ) : (
          props.onHoverTextDisplay
        )}
      </button>
    </div>
  );
}

export default SideNav;
