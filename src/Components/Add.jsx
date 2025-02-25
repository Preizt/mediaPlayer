// import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { uploadVideo } from "../services/allAPI";

const Add = ({ setvideoResp }) => {
  const [video, setVideo] = useState({
    caption: "",
    image: "",
    videoLink: "",
  });

  // console.log(video);

  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = async () => {
    // console.log(video);

    if (video.caption && video.image && video.videoLink) {
      // console.log("Success");
      try {
        let response = await uploadVideo(video);
        setvideoResp(response);
        if (response.status >= 200 && response.status <= 300) {
          alert("Successfully Added your video");
          setShow(false);
          setVideo({
            caption: "",
            image: "",
            videoLink: "",
          });
        } else {
          alert("Error Occured PLease contact the Admin");
        }
      } catch {
        alert("An error Occured");
      }
    } else {
      alert("Please fill the form");
    }
  };

  const seperateValue = (value) => {
    // console.log(value);

    if (value.includes(".be/")) {
      const videoID = value.split(".be/")[1];
      // console.log(videoID);
      setError(false);
      setVideo({ ...video, videoLink: videoID });
      // console.log(value);
    } else {
      setError(true);
      // console.error("Invalid URL");
    }
  };

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
            onChange={(e) => {
              setVideo({ ...video, caption: e.target.value });
            }}
          >
            <Form.Control type="text" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Image URL"
            className="mb-3"
            onChange={(e) => {
              setVideo({ ...video, image: e.target.value });
            }}
          >
            <Form.Control type="text" placeholder="Video Image URL" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Youtube Link"
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => {
                seperateValue(e.target.value);
              }}
              type="text"
              placeholder="Video Youtube Link"
            />
          </FloatingLabel>

          <p className="text-danger">
            {error ? "Invalid Url , PLease check your url" : ""}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
