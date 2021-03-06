import React from "react";
import "./style.css";

function Tooltip(props) {
  if (props.makeVisible)
    return (
      <div id="tooltip" className="bottom">
        <div className="tooltip-arrow" />
        <div className="tooltip-label">{props.tooltipText}</div>
        {props.children}
      </div>
    );
  else {
    return "";
  }
}

export default Tooltip;
