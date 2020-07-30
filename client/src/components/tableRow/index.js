import React from "react";
import Tooltip from "../Tooltip/tooltip";
import "./style.css";

function tableRow(props) {
  // console.log(props.key);
  return (
    <tr>
      {/* <th scope={props.scope}>{props.num + 1}</th> */}
      <td className="d-none d-lg-table-cell">{props.title}</td>
      <td
        className="d-none d-lg-table-cell"
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
      <td className="d-lg-none">
        <div className="row justify-content-center">{props.title}</div>
        {/* <div className='row'></div> */}
        <div className="row">
          <img
            className="img-thumbnail image-cell p-2"
            alt="Not Available"
            src={props.image}
          ></img>
        </div>
        <div className="row justify-content-center pb-2">
          <div className="col">
            <p>
              deployed link:&nbsp;
              <a href={props.appLink}>{props.appLink}</a>
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">{props.desc}</div>
        </div>
      </td>
      <td className="d-none d-lg-table-cell">
        <div className="row justify-content-center pb-2">
          <div className="col">
            <p>
              deployed link:&nbsp;
              <a href={props.appLink}>{props.appLink}</a>
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">{props.desc}</div>
        </div>
      </td>
      <td className="d-none d-lg-table-cell">{props.children}</td>
    </tr>
  );
}

export default tableRow;
