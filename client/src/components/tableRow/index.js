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
        data-link={props.gifLink}
        onMouseLeave={props.startAnimate}
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
        {/* <GifModal
          gifLink={props.gifLink}
          showGIF={props.openGif}
          closeGif={props.closeGif}
        /> */}
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
