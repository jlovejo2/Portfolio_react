import React from "react";
import Modal from "react-bootstrap/Modal";
import "./style.css";

function GifModal(props) {
  return (
    <Modal
      //   className={"gifModal"}
      show={props.showGIF}
      onHide={props.closeGif}
      centered
      size={"lg"}
    >
      <Modal.Header closeButton>
        <div className="row">
          <div className="col text-center">
            <Modal.Title>
              {props.project
                ? `Watch GIF of ${props.project.title} in action`
                : ""}
            </Modal.Title>
            <p>{props.project ? props.project.description : ""}</p>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body className="mr-2">
        <img
          className="img-responsive"
          alt="Not Available"
          src={props.project ? `${props.project.functionalPreview}` : ""}
        ></img>
      </Modal.Body>
    </Modal>
  );
}

export default GifModal;
