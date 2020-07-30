import React from "react";
import "./style.css";

export function UnorderList(props) {
  // console.log(props.key);
  return (
    <ul
      className={`p-0 ${props.bootStrapList ? "list-group " : ""} ${
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
  return (
    <li
      className={`${props.classes} p-2`}
      style={{ width: `${props.customStyling}%` }}
    >
      {props.children}
    </li>
  );
}
