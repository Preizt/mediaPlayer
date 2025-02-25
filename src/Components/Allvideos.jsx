import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import {
  addHistory,
  deleteHistory,
  getAllVideo,
  deleteVideo,
  uploadVideo,
  getSingleCategory,
  updateCatgory,
} from "../services/allAPI";

const Allvideos = ({ videoResp, videoDeletedResponse , setCategoryVideoDeletedResponse}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getVideos();
  }, [videoResp, videoDeletedResponse]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = async (value) => {
    const { caption, videoLink } = value;
    let currentData = new Date();
    let formatedData = currentData.toLocaleString("en-IN", {
      timeZoneName: "short",
    });

    const payload = { caption, videoLink, formatedData };
    // console.log(payload);

    try {
      await addHistory(payload);
    } catch (error) {
      console.log(error);
    }

    setSelectedVideo(value);
    setShow(true);
  };

  const getVideos = async () => {
    let apiResponse = await getAllVideo();
    // console.log(apiResponse);

    setData(apiResponse.data);
    // console.log(apiResponse.data);
  };

  const onDeleteClick = async (id) => {
    try {
      await deleteVideo(id);
      getVideos();
    } catch (error) {
      alert(error);
    }
  };

  const onVideoDrag = (e, id) => {
    // console.log(e, id);
    e.dataTransfer.setData("videoId", id);
  };

  const onDragOverDiv = (e) => {
    e.preventDefault();
  };

  const onVideoDrop = async (e) => {
    let { categoryId, videoObj } = JSON.parse(
      e.dataTransfer.getData("fromCategory")
    );
    // destructring done here
    console.log(categoryId, videoObj);
    await uploadVideo(videoObj);
    //api call cheyth
    getVideos();

    //get category details

    let apiResponse = await getSingleCategory(categoryId);
    console.log(apiResponse.data," category details");
    let currentAllvideos = apiResponse.data.Allvideos
    let sortedVideos = currentAllvideos.filter((item)=>item.id!=videoObj.id)
    console.log(sortedVideos);

    const payload = {
      id : categoryId,
      categoryName : apiResponse.data.categoryName,
      Allvideos : sortedVideos
    }
    let deleteResponse =   await updateCatgory(categoryId,payload)
    setCategoryVideoDeletedResponse(deleteResponse)

  };

  return (
    <>
      <div onDragOver={(e) => onDragOverDiv(e)} onDrop={(e) => onVideoDrop(e)}>
        <h3>All Videos</h3>

        <div className="d-flex gap-3 flex-wrap">
          {data.map((obj, index) => (
            <div key={index}>
              <Card
                style={{ width: "16rem" }}
                id="card"
                draggable="true"
                onDragStart={(e) => onVideoDrag(e, obj.id)}
              >
                <Card.Img
                  variant="top"
                  src={obj.image}
                  onClick={() => handleShow(obj)}
                />

                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title
                      onClick={() => handleShow(obj)}
                      style={{ cursor: "pointer" }}
                    >
                      {obj.caption}
                    </Card.Title>

                    <Button
                      variant="danger"
                      onClick={() => onDeleteClick(obj.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}

          {selectedVideo && (
            <Modal show={show} onHide={handleClose} size="lg">
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
      </div>
    </>
  );
};

export default Allvideos;
