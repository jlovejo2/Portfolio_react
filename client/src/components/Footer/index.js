import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <div className="fixed-bottom min-10 text-center footer">
      <div className="col-12">{props.children}</div>
      {/* <p>Copright&copy;</p> */}
    </div>
  );
}

export default Footer;
