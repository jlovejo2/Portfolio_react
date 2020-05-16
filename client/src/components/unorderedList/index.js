import React from "react";
import "./style.css";

export function UnorderList(props) {
  // console.log(props.key);
  return (
    <ul
      className={`${props.bootStrapList ? "list-group" : ""} ${
        props.classes
      } w-100`}
    >
      {props.children}
    </ul>
  );
}

export function ListItem(props) {
  return <li className={`${props.classes} p-2`}>{props.children}</li>;
}
