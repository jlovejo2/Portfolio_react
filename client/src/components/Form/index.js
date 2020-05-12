import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <textarea className="form-control" {...props}></textarea>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-warning btn-md ml-4">
      {props.children}
    </button>
  );
}
