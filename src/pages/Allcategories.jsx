import React, { use, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
// import Allvideos from '../Components/Allvideos';

import {
  createCategory,
  deleteCategory,
  deleteVideo,
  getCategory,
  getSingleVideo,
  updateCatgory,
} from "../services/allAPI";
import { Card } from "react-bootstrap";


const Allcategories = ({ setvideoDeletedResponse,categoryVideoDeletedResponse }) => {
  const [show, setShow] = useState(false);

  const [categoryName, setCategory] = useState("");

  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState([null]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  const handleCloseVideo = () => setShowVideo(false);

  useEffect(() => {
    getCategoryDetails();
  }, [categoryVideoDeletedResponse]);

  const createNewCategory = async () => {
    if (categoryName) {
      try {
        const category = {
          categoryName,
          Allvideos: [],
        };
        await createCategory(category);
        setShow(false);
        setCategory("");
        getCategoryDetails();
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("PLease fill the form");
    }
  };

  const getCategoryDetails = async () => {
    try {
      let apiResponse = await getCategory();
      setData(apiResponse.data);
      // console.log(apiResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteClick = async (id) => {
    try {
      await deleteCategory(id);
      getCategoryDetails();
    } catch (error) {
      console.error(error);
    }
  };

  const dragOverContent = (e) => {
    e.preventDefault();
  };

  const droped = async (e, catData) => {
    let vId = e.dataTransfer.getData("videoId");
    // console.log(e.dataTransfer.getData("videoId"));
    // console.log(data);
    try {
      let response = await getSingleVideo(vId);
      // console.log(response);

      if (response.status >= 200 && response.status <= 300) {
        catData.Allvideos.push(response.data);
        console.log(catData);
        await updateCatgory(catData.id, catData);

        getCategory();
        let deleteResponse = await deleteVideo(vId);
        setvideoDeletedResponse(deleteResponse);
      }
    } catch (error) {
      console.error(error);
    }

    // console.log(response.data);
  };

  const handleShowVideo = (video) => {
    setSelectedVideo(video);
    setShowVideo(true);
  };

  const handleCategoryDrag = (e, categoryId, videoObj) => {
    console.log(`started dragging ${videoObj} in ${categoryId}`);
    let dataToTransfer = {
      videoObj,
      categoryId,
    }
     e.dataTransfer.setData("fromCategory",JSON.stringify(dataToTransfer)) // object to string convertion : stringify
  }

  return (
    <div>
      <div className="d-flex gap-3">
        <h3>All Category</h3>
        <button className="btn btn-primary" onClick={handleShow}>
          +
        </button>
      </div>

      {data.length > 0 ? (
        data.map((val, index) => (
          <div
            onDragOver={(e) => dragOverContent(e)}
            onDrop={(e) => droped(e, val)}
            style={{ padding: "20px" }}
            key={index}
            className="container-fluid border border-2 rounded mt-3"
          >
            <div className="d-flex justify-content-between p-2">
              <h4>{val.categoryName}</h4>
              <button className="btn" onClick={() => onDeleteClick(val.id)}>
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>

            <div className="row">
              {val.Allvideos.map((a, index) => (
                <div
                  draggable={true}
                  onDragStart={(e) => handleCategoryDrag(e, val.id, a)}
                  key={index}
                  className="col-6"
                >
                  <Card
                    style={{ width: "16rem", margin: "10px" }}
                    id="card"
                    // draggable="true"
                    // onDragStart={(e) => onVideoDrag(e, obj.id)}
                  >
                    <Card.Img
                      variant="top"
                      src={a.image}
                      onClick={() => handleShowVideo(a)}
                    />

                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <Card.Title
                        // onClick={() => handleShow(obj)}
                        // style={{ cursor: "pointer" }}
                        >
                          {a.caption}
                        </Card.Title>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <h3 className="text-danger">No Category</h3>
      )}

      <Modal show={show} onHide={handleClose} size="">
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Category Details"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Category Details"
              onChange={(e) => setCategory(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createNewCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {selectedVideo && (
        <Modal show={showVideo} onHide={handleCloseVideo} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedVideo.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo.videoLink}&autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Allcategories;
