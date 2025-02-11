import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex gap-3 p-3">
        <h4>Upload New videos</h4>
        <button className="btn btn-primary" onClick={handleShow}>
          +
        </button>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Caption" />
        </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Image URL"
        className="mb-3"
        
      >
        <Form.Control type="text" placeholder="Video Image URL" />
        </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Youtube Link"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Youtube Link" />
        </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
