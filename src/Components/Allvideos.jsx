import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

const Allvideos = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="">
      <h3>All Videos</h3>
      <Card style={{ width: "18rem"}} onClick={handleShow} id="card">
        <Card.Img
          variant="top"
          src="https://cdn.shopify.com/s/files/1/0830/9575/files/dune-part-two-movie-poster-matt-ferguson_ac86f8c9-f410-450c-805b-c4352aac4a55_540x.jpg?v=1730814717"
        />

        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>Card Title</Card.Title>

            <Button variant="danger" >
              <i className="fa-solid fa-trash"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/n9xhJrPXop4?si=vdFVa8tn4vVD74p_&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Allvideos;

 