import React from "react";
import "./style.css";

function SideNav(props) {
  return (
    <div id="mySidenav" /*class="vertText"*/>
      <button onClick={props.activeContact} className="btn btn-link">
        Contact Me
      </button>
    </div>
  );
}

export default SideNav;
