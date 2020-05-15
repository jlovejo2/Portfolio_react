import React from "react";
import "./style.css";

function Jumbotron({ title, children, fluid }) {
  return (
    <div
      className={`jumbotron mainHeadline ${fluid ? "jumbotron-fluid" : ""} `}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4">{title}</h1>
            {/* <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p> */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
