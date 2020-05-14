import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <div className="fixed-bottom min-10 text-center footer">
      <div className="row">
        <div className="d-flex col-4 justify-content-start pl-4">
          {props.childrenLeft}
        </div>
        <div className="col-4">Copright&copy;</div>
        <div className="col-4 justify-content-end pr-4">
          {props.childrenRight}
        </div>
      </div>
    </div>
  );
}

export default Footer;
