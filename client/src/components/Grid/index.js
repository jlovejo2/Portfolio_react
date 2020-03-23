import React from "react";
import './style.css'

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
<<<<<<< HEAD
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
=======
  return <div className={`container${fluid ? "-fluid" : ""} m-3`}>{children}</div>;
>>>>>>> 25f4586... added CSS and classes to to make pages look more crisp and clean
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, center, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}  ${center ? 'justify-content-center' : ''}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
