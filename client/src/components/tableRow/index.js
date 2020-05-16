import React from "react";
import "./style.css";

function tableRow(props) {
  // console.log(props.key);
  return (
    <tr>
      <th scope={props.scope}>{props.num + 1}</th>
      <td>{props.title}</td>
      <td onMouseEnter={props.startAnimate} onMouseLeave={props.stopAnimate}>
        <img
          className="img-thumbnail"
          alt="Not Available"
          src={props.animate ? `${props.gifLink}` : `${props.image}`}
        ></img>
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
