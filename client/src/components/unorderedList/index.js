import React from "react";
import "./style.css";

export function UnorderList(props) {
  // console.log(props.key);
  return (
    <ul
      className={`${props.bootStrapList ? "list-group " : ""} ${
        props.horizontal
          ? "list-group-horizontal portfolio-table__UL-fontSize"
          : ""
      } ${props.classes}`}
    >
      {props.children}
    </ul>
  );
}

export function ListItem(props) {
  return <li className={`${props.classes} p-2`}>{props.children}</li>;
}
