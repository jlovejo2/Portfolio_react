import React from "react";
import "./style.css";

function tooltip(props) {
  if (props.makeVisible)
    return (
      <div id="tooltip" class="bottom">
        <div class="tooltip-arrow" />
        <div class="tooltip-label">{props.tooltipText}</div>
        {props.children}
      </div>
    );
  else {
    return "";
  }
}

export default tooltip;
