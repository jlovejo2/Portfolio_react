import React from "react";
import Modal from "react-bootstrap/Modal";

function GifModal(props) {
  return (
    <Modal show={props.showGIF} onHide={props.closeGif}>
      <Modal.Header>
        <Modal.Title>Play GIF</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="img-responsive"
          alt="Not Available"
          src={props.projectAnimation}
        ></img>
        <p>{props.gifLink}</p>
      </Modal.Body>
    </Modal>
  );
}

export default GifModal;
