import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <div className="fixed-bottom min-10 footer-style">
      <div className="row align-items-center">
        <div className="d-flex col-5 justify-content-start">
          {props.childrenLeft}
        </div>
        <div className="d-flex col-2 justify-content-center p-2">
          <p>Copright&copy;</p>
        </div>
        <div className="d-flex col-5 justify-content-end">
          {props.childrenRight}
        </div>
      </div>
    </div>
  );
}

export default Footer;
