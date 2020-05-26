import React from "react";
import Tooltip from "../Tooltip/tooltip";
import GifModal from "../GifModal/gifModal";
import "./style.css";

function tableRow(props) {
  // console.log(props.key);
  return (
    <tr>
      <th scope={props.scope}>{props.num + 1}</th>
      <td>{props.title}</td>
      <td
        onMouseEnter={props.startAnimate}
        onClick={props.handleOpenGif}
        // data-link={props.gifLink}
        // data-desc={props.desc}
        // data-title={props.title}
        data-projIndex={props.num}
        onMouseLeave={props.stopAnimate}
      >
        <img
          className="img-thumbnail image-cell"
          alt="Not Available"
          src={props.image}
        ></img>
        <Tooltip
          makeVisible={props.tooltipChange}
          tooltipText={props.tooltipText}
        />
      </td>
      <td>
        <a href={props.appLink}>{props.appLink}</a>
      </td>
      <td>{props.desc}</td>
      <td>{props.children}</td>
    </tr>
  );
}

export default tableRow;
